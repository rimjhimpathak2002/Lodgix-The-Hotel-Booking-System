using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Interface
{
	public interface ICityService
	{
        public Task<City> GetCity(int id);
        public Task<List<City>> GetAllCities();
        public Task<City> AddCity(CityDTO City);
        public Task<City> UpdateCityDescription(int id, string description);
        public Task<City> DeleteCity(int id);
        public Task<List<City>> GetCityByName(string cname);
        public Task<List<Hotel>> GetHotelsByCity(string cname);
        public Task<City> UpdateCityDetails(CityDTO cityDTO);
        //public Task<Hotel> UpdateCityDetails(Hotel hotel);
    }
}

