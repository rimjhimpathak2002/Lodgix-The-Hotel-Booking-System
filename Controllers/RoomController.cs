using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleHotelBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomService _roomservice;

        public RoomController(IRoomService roomService)
        {
            _roomservice = roomService;
        }
        [HttpGet("GetAllRooms")]
        public async Task<ActionResult<List<Room>>> GetRooms()
        {
            try
            {
                var rooms = await _roomservice.GetAllRooms();
                return Ok(rooms);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet("GetById")]
        public async Task<ActionResult<Room>> GetRoom(int id)
        {
            try
            {
                var room = await _roomservice.GetRoom(id);
                return Ok(room);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        //[Authorize(Roles = "Admin")]
        [HttpPost("AddRoom")]
        public async Task<ActionResult<Room>> AddRoom(RoomDTO room)
        {
            try
            {
                var newroom = await _roomservice.AddRoom(room);
                return Ok(newroom);

            }
            //  catch (Exception ex)
            //  {
            //      return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            // }
            catch (DbUpdateException dbEx)
            {
                // Log and handle database update exceptions
                // _logger.LogError(dbEx, "Database update error occurred.");
                return StatusCode(500, "A database error occurred. Please try again later.");
            }
            catch (Exception ex)
            {
                // Log and handle general exceptions
                // _logger.LogError(ex, "An error occurred.");
                return StatusCode(500, "An unexpected error occurred. Please try again later.");
            }
        }
        [HttpPut("UpdatePrice")]
        public async Task<ActionResult<Room>> UpdatePrice(int id, int price)
        {
            try
            {
                var updatedRoom = await _roomservice.UpdateRoomPrice(id, price);
                return Ok(updatedRoom);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete("DeleteRoom")]
        public async Task<ActionResult<Room>> DeleteRoom(int id)
        {
            try
            {
                var room = await _roomservice.DeleteRoom(id);
                return Ok(room);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        //[Authorize(Roles = "Admin,Owner")]
        [HttpPut("UpdateDetails")]
        public async Task<ActionResult<Room>> UpdateRoomDetails(RoomDTO roomDTO)
        {
            try
            {
                var updatedRoom = await _roomservice.UpdateRoomDetails(roomDTO);
                return Ok(updatedRoom);
            }

            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
            }
        }

        [HttpGet("AvailableRooms")]
        public async Task<ActionResult<List<Room>>> GetAvailableRooms()
        {
            try
            {
                var availableRooms = await _roomservice.GetAvailableRooms();
                return Ok(availableRooms);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

    }
}

