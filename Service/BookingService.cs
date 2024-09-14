using System;
using SampleHotelBooking.Domain.Enums;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Mapper;

namespace SampleHotelBooking.Service
{
    public class BookingService : IBookingService
    {
        private readonly IRepository<int, Booking> _reservationrepository;
        private readonly IRepository<int, Room> _roomrepository;
        private readonly IRepository<string, User> _userrepository;
        //private readonly ILogger<ReservationService> _logger;

        public BookingService(IRepository<int, Booking> repository,
            IRepository<int, Room> roomrepository,
            IRepository<string, User> userrepository)
        {
            _reservationrepository = repository;
            _roomrepository = roomrepository;
            _userrepository = userrepository;
        

        }


        public async Task<Booking> DeleteBooking(int id)
        {
            //_logger.LogInformation("Deleting Reservation...");
            var Reservation = await GetBooking(id);
            if (Reservation != null)
            {
                await _reservationrepository.Delete(id);
                return Reservation;
            }
            throw new Exception();
        }

        public async Task<List<Booking>> GetAllBookings()
        {
            //_logger.LogInformation("Getting all Reservations...");
            var Reservations = await _reservationrepository.GetAll();
            if (Reservations != null) { return Reservations; }
            throw new Exception();

        }

        public async Task<Booking> GetBooking(int id)
        {
            //_logger.LogInformation("Getting Reservation by {id}", id);
            var Reservation = await _reservationrepository.GetById(id);
            if (Reservation != null) { return Reservation; }
            throw new Exception();
        }

        public async Task<List<Booking>> GetBookingByRoomId(int roomId)
        {
            //_logger.LogInformation("Getting Reservations by {roomId}", roomId);
            var Reservations = await GetAllBookings();
            if (Reservations == null)
            {
                throw new InvalidOperationException("No Reservations found.");
            }

            return Reservations.Where(b => b.RoomId == roomId).ToList();
        }


        //public async Task<List<Reservation>> GetReservationsByUserId(int userid)
        //{
        //    var Reservations=await GetAllReservations();
        //    if(Reservations==null) throw new NoReservationFoundException();
        //    List<Reservation> Reservations1 = new List<Reservation>();
        //    foreach (var item in Reservations)
        //    {
        //        if(item.UserId == userid) Reservations1.Add(item);
        //    }
        //    return Reservations1;

        //}

        public async Task<int> GetBookingsCount()
        {
            var Reservations = await GetAllBookings();
            return Reservations.Count;
        }

        public async Task<Booking> UpdateBookingStatus(int id, BookingStatus status)
        {
            //_logger.LogInformation("Updating Reservation Status");
            var newReservation = await GetBooking(id);
            if (newReservation != null)
            {
                newReservation.Status = status;
                if (status == BookingStatus.CheckedOut || status == BookingStatus.Cancelled)
                {
                    if (newReservation.Room != null)
                    {
                        newReservation.Room.Available = true;
                    }
                }
                else if (status == BookingStatus.Approved)
                {
                    if (newReservation.Room != null)
                    {
                        newReservation.Room.Available = false;
                    }
                }
                await _reservationrepository.Update(newReservation);
                return newReservation;
            }
            throw new Exception();
        }

        public async Task<List<Booking>> GetHotelBookings(int hotelId)
        {
            //_logger.LogInformation("Getting Hotel Reservations");
            var allRooms = await _roomrepository.GetAll();
            var hotelRooms = allRooms.Where(r => r.HotelId == hotelId).Select(r => r.RoomId).ToList();

            var allReservations = await GetAllBookings();
            var hotelReservations = allReservations.Where(b => hotelRooms.Contains(b.RoomId)).ToList();

            return hotelReservations;
        }
        public async Task<bool> IsRoomAvailable(int roomId, DateTime checkInDate, DateTime checkOutDate)
        {
            //_logger.LogInformation("Checking Room Availability");
            var Reservations = await GetBookingByRoomId(roomId);
            foreach (var Reservation in Reservations)
            {
                if ((checkInDate >= Reservation.CheckInDate && checkInDate < Reservation.CheckOutDate) ||
                    (checkOutDate > Reservation.CheckInDate && checkOutDate <= Reservation.CheckOutDate) ||
                    (checkInDate <= Reservation.CheckInDate && checkOutDate >= Reservation.CheckOutDate))
                {
                    return false;
                }
            }

            return true;
        }

        public async Task<Booking> AddBooking(BookingDTO Reservation1, string username)
        {
            //_logger.LogInformation("Adding Reservation...");
            Booking Reservation = BookingMapping.MapReservationDTOToEntity(Reservation1);
            bool isRoomAvailable = await IsRoomAvailable(Reservation.RoomId, Reservation.CheckInDate, Reservation.CheckOutDate);
            if (!isRoomAvailable)
            {
                throw new Exception("Room is not available for the specified dates");
            }

            var user = await _userrepository.GetById(username);
            if (user == null)
            {
                throw new Exception("User does not exist");
            }

            if (Reservation.CheckOutDate <= Reservation.CheckInDate)
            {
                throw new Exception("Check-out date must be after check-in date");
            }

            if (Reservation.CheckInDate.Date < DateTime.UtcNow.Date)
            {
                throw new Exception("Check-in date cannot be earlier than today");
            }

            var room = await _roomrepository.GetById(Reservation.RoomId);
            if (room == null)
            {
                throw new Exception("Room does not exist");
            }
            TimeSpan span = Reservation.CheckOutDate - Reservation.CheckInDate;
            float totalPrice = (float)span.TotalDays * room.PricePerNight;

            Reservation.TotalPrice = totalPrice;
            Reservation.Status = BookingStatus.Pending;
            Reservation.BookedDate = DateTime.UtcNow;
            Reservation.UserId = user.UserId;
            var addedReservation = await _reservationrepository.Add(Reservation);
            //_logger.LogInformation("Reservation added successfully");
            return addedReservation;
        }
    }
}

