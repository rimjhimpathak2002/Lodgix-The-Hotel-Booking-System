using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Mapper
{
	public class CityMapping
	{
		public static CityDTO MapCityToDTO(City city)
		{
			return new CityDTO
			{
				CityID = city.CityID,
				Name = city.Name,
				Description = city.Description,
				PinCode = city.PinCode,
				ImageURLs = city.ImageURLs.ToList()

			};
		}

        public static City MapDTOToCity(CityDTO cityyDTO)
        {
			return new City
			{
				CityID = cityyDTO.CityID,
				Name = cityyDTO.Name,
				Description = cityyDTO.Description,
				PinCode = cityyDTO.PinCode,
				ImageURLs = cityyDTO.ImageURLs != null ? cityyDTO.ImageURLs : new List<string>(),
			};
        }
    }
}

