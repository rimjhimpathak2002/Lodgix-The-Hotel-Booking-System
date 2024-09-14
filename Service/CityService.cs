using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Mapper;

namespace SampleHotelBooking.Service
{
	public class CityService : ICityService
	{
        private readonly IRepository<int, City> _repository;
        public CityService(IRepository<int, City> repository)
		{
			_repository = repository;
		}


		public async Task<City> AddCity(CityDTO city)
		{
			if(city.ImageURLs == null || !city.ImageURLs.Any())
			{
				throw new Exception("Image URL are required when adding city");
			}
			City newcity = CityMapping.MapDTOToCity(city);
			newcity = await _repository.Add(newcity);
			return newcity;

		}

        public async Task<City> DeleteCity(int id)
        {
            var city = await GetCity(id);
            if (city != null)
            {
                return await _repository.Delete(id);
            }
            throw new Exception();

        }

        public async Task<City> GetCity(int id)
        {
            var city = await _repository.GetById(id);
            if (city != null) { return city; }
            throw new Exception();
        }

        public async Task<List<City>> GetAllCities()
        {
            var cities = await _repository.GetAll();
            if (cities != null) { return cities; }
            throw new Exception();
        }

        public async Task<City> UpdateCityDescription(int id, string description)
        {
            var city = await GetCity(id);
            if (city != null)
            {
                city.Description = description;
                return await _repository.Update(city);
            }
            throw new Exception();
        }


        public async Task<City> UpdateCityDetails(CityDTO cityDTO)
        {
            //_logger.LogInformation("Updating details for hotel with ID: {HotelId}");
            var existingCity = await GetCity(cityDTO.CityID);
            if (existingCity != null)
            {
                existingCity.Name = cityDTO.Name;
                existingCity.Description = cityDTO.Description;
                existingCity.PinCode = cityDTO.PinCode;
                existingCity.ImageURLs = cityDTO.ImageURLs;

                await _repository.Update(existingCity);
                //_logger.LogInformation("Hotel details updated successfully: {HotelId}", hotelDTO.Id);
                return existingCity;
            }
            throw new Exception();
        }

        public async Task<List<City>> GetCityByName(string location)
        {
            var cities = await _repository.GetAll();
            return cities.Where(h => h.Name.ToLower() == location.ToLower()).ToList();
        }

        public Task<List<Hotel>> GetHotelsByCity(string cname)
        {
            throw new NotImplementedException();
        }
    }
}

