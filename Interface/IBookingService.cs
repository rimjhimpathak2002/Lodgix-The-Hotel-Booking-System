using System;
using SampleHotelBooking.Domain.Enums;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Interface
{
	public interface IBookingService
	{
        public Task<Booking> GetBooking(int id);
        public Task<List<Booking>> GetAllBookings();
        public Task<Booking> AddBooking(BookingDTO Boooking, string username);
        public Task<Booking> UpdateBookingStatus(int id, BookingStatus status);
        public Task<Booking> DeleteBooking(int id);
        //public Task<List<Reservation>> GetReservationsByUserId(int userid);
        public Task<List<Booking>> GetBookingByRoomId(int roomid);
        public Task<int> GetBookingsCount();
        //public Task<int> AvailableRoomsCount();
        public Task<List<Booking>> GetHotelBookings(int hotelId);
        public Task<bool> IsRoomAvailable(int roomId, DateTime checkInDate, DateTime checkOutDate);
    }
}
	