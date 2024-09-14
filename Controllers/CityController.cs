using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SampleHotelBooking.Controllers
{
    [Route("api/[controller]")]
    public class CityController : Controller
    {
        private readonly ICityService _cityservice;

        public CityController(ICityService cityservice)
        {
            _cityservice = cityservice;
        }

        [HttpGet("GetAllCities")]
        public async Task<IActionResult> GetAllCities()
        {
            try
            {
                var cities = await _cityservice.GetAllCities();
                return Ok(cities);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

        }


        [HttpPost("AddCity")]
        public async Task<IActionResult> AddCity(CityDTO city)
        {
            try
            {
                var addcity = await _cityservice.AddCity(city);
                return Ok(addcity);
            }
           // catch (Exception ex)
           // {
            //    return StatusCode(500, ex.Message);
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




    }

}


