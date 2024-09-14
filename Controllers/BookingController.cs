using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SampleHotelBooking.Domain.Enums;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleHotelBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingService _reservationservice;

        public BookingController(IBookingService ReservationService)
        {
            _reservationservice = ReservationService;
        }
        [HttpGet("AllBookings")]
        public async Task<ActionResult<List<Booking>>> GetBookings()
        {
            try
            {
                return await _reservationservice.GetAllBookings();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            //catch (Exception ex)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            //}
        }
        [HttpGet("GetById")]
        public async Task<ActionResult<Booking>> GetBooking(int id)
        {
            try
            {
                return await _reservationservice.GetBooking(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            //catch (Exception ex)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            //}
        }

        //[HttpPost("AddReservation")]
        //public async Task<ActionResult<Reservation>> AddReservation(ReservationDTO Reservation)
        //{
        //    try
        //    {
        //        return await _Reservationservice.AddReservation(Reservation);
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
        //    }
        //}

        [HttpPut("UpdateBookingStatus")]
        public async Task<ActionResult<Booking>> UpdateBooking(int id, BookingStatus status)
        {
            try
            {
                return await _reservationservice.UpdateBookingStatus(id, status);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            //catch (Exception ex)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            //}
        }
        [HttpDelete("DeleteBooking")]
        public async Task<ActionResult<Booking>> DeleteReservation(int id)
        {
            try
            {
                return await _reservationservice.DeleteBooking(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            //catch (Exception ex)
            //{
            //    return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred: {ex.Message}");
            //}
        }
        [HttpGet("HotelBookings")]
        public async Task<IActionResult> GetHotelBookings(int hotelId)
        {
            try
            {
                var Reservations = await _reservationservice.GetHotelBookings(hotelId);
                return Ok(Reservations);

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            //catch (Exception ex)
            //{
            //    return StatusCode(500, "Internal server error: " + ex.Message);
            //}
        }
        [HttpGet("CheckAvailability")]
        public async Task<ActionResult<bool>> CheckRoomAvailability(int roomId, DateTime checkInDate, DateTime checkOutDate)
        {
            bool isRoomAvailable = await _reservationservice.IsRoomAvailable(roomId, checkInDate, checkOutDate);
            return Ok(isRoomAvailable);
        }

        [HttpPost("AddBooking")]
        public async Task<ActionResult<Booking>> AddReservation(BookingDTO Reservation, string username)
        {
            try
            {
                var addedReservation = await _reservationservice.AddBooking(Reservation, username);
                return CreatedAtAction(nameof(GetBooking), new { id = addedReservation.BookingID }, addedReservation);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}

