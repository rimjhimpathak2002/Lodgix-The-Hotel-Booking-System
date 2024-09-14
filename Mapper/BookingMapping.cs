using System;
using SampleHotelBooking.Domain.Enums;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Mapper
{
    public class BookingMapping
    {
        public static BookingDTO MapReservationToDTO(Booking reservation)
        {
            return new BookingDTO
            {
                UserId = reservation.UserId,
                RoomId = reservation.RoomId,
                CheckInDate = reservation.CheckInDate,
                CheckOutDate = reservation.CheckOutDate,
                Adults = reservation.Adults,
                Children = reservation.Children,
                TotalPrice = reservation.TotalPrice,
                Status = (Domain.Enums.BookingStatus)reservation.Status
            };
        }

        public static Booking MapReservationDTOToEntity(BookingDTO reservationDTO)
        {
            return new Booking
            {
                UserId = reservationDTO.UserId,
                RoomId = reservationDTO.RoomId,
                CheckInDate = reservationDTO.CheckInDate,
                CheckOutDate = reservationDTO.CheckOutDate,
                Adults = reservationDTO.Adults,
                Children = reservationDTO.Children,
                TotalPrice = reservationDTO.TotalPrice,
                Status = BookingStatus.Pending
            };
        }
    }
}

