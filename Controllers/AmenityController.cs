using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleHotelBooking.Controllers
{
    [Route("api/[controller]")]
    public class AmenityController : ControllerBase
    {
        private readonly IAmenityService _amenityService;
        private readonly IHotelService _hotelService;
        //private readonly ILogger<AmenityController> _logger;

        public AmenityController(IAmenityService amenityService, IHotelService hotelService)
        {
            _amenityService = amenityService;
            _hotelService = hotelService;
        }

        [HttpPost("add")]
        public async Task<ActionResult<Amenity>> AddAmenity(AmenityDTO amenity)
        {
            var newAmenity = await _amenityService.AddAmenity(amenity);
            return CreatedAtAction(nameof(GetAmenity), new { id = newAmenity.AmenityId }, newAmenity);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Amenity>> DeleteAmenity(int id)
        {
            var deletedAmenity = await _amenityService.DeleteAmenity(id);
            if (deletedAmenity == null)
            {
                return NotFound();
            }
            return deletedAmenity;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Amenity>> GetAmenity(int id)
        {
            var amenity = await _amenityService.GetAmenity(id);
            if (amenity == null)
            {
                return NotFound();
            }
            return amenity;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<Amenity>>> GetAllAmenities()
        {
            var amenities = await _amenityService.GetAllAmenities();
            return amenities;
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAmenity(int id, AmenityDTO updateAmenityDTO)
        {
            try
            {
                var updatedAmenity = await _amenityService.UpdateAmenity(id, updateAmenityDTO.Name);
                return Ok(updatedAmenity);
            }
            catch (Exception ex)
            {
                //_logger.LogError(ex, "An error occurred while updating amenity with ID {AmenityId}", id);
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpPost("add-amenity-to-hotel")]
        public async Task<IActionResult> AddAmenityToHotel(int hotelId, int amenityId)
        {
            try
            {
                var hotel = await _hotelService.GetHotel(hotelId);

                if (hotel == null)
                {
                    return NotFound("Hotel not found.");
                }

                var amenity = await _amenityService.GetAmenity(amenityId);

                if (amenity == null)
                {
                    return NotFound("Amenity not found.");
                }

                if (hotel.HotelAmenities != null && hotel.HotelAmenities.Any(ha => ha.AmenityId == amenityId))
                {
                    return Conflict("Amenity is already added to the hotel.");
                }

                if (hotel.HotelAmenities != null)
                {
                    hotel.HotelAmenities.Add(new HotelAmenity { HotelId = hotelId, AmenityId = amenityId });
                }
                else
                {
                    hotel.HotelAmenities = new List<HotelAmenity>();
                    hotel.HotelAmenities.Add(new HotelAmenity { HotelId = hotelId, AmenityId = amenityId });
                }

                await _hotelService.UpdateHotelDetails(hotel);

                return Ok("Amenity added to hotel successfully.");
            }
            catch
            {
                return StatusCode(500, "An error occurred while adding the amenity to the hotel.");
            }
        }

        [HttpPost("delete-amenity-from-hotel")]
        public async Task<IActionResult> DeleteAmenityFromHotel(int hotelId, int amenityId)
        {
            try
            {
                var hotel = await _hotelService.GetHotel(hotelId);

                if (hotel == null)
                {
                    return NotFound("Hotel not found.");
                }

                var amenity = await _amenityService.GetAmenity(amenityId);

                if (amenity == null)
                {
                    return NotFound("Amenity not found.");
                }

                if (hotel.HotelAmenities != null)
                {
                    var hotelAmenity = hotel.HotelAmenities.FirstOrDefault(ha => ha.AmenityId == amenityId);

                    if (hotelAmenity == null)
                    {
                        return NotFound("Amenity is not associated with the hotel.");
                    }

                    hotel.HotelAmenities.Remove(hotelAmenity);

                    await _hotelService.UpdateHotelDetails(hotel);

                    return Ok("Amenity deleted from hotel successfully.");
                }
                else
                {
                    return StatusCode(500, "An error occurred while deleting the amenity from the hotel.");
                }
            }
            catch
            {
                return StatusCode(500, "An error occurred while deleting the amenity from the hotel.");
            }
        }

    }
}


