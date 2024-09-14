using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Mapper
{
	public class HotelMapping
	{
        public static HotelDTO MapHotelToDTO(Hotel hotel)
        {
            return new HotelDTO
            {
                Id = hotel.HotelId,
                Name = hotel.Name,
                Address = hotel.Address,
                Description = hotel.Description,
                CityId = hotel.CityId,
                City = hotel.City,
                NumberOfRooms = hotel.Rooms?.Count ?? 0,
                ImageURLs = hotel.ImageURLs.ToList(),
                prePrice = hotel.prePrice,
                StartingPrice = hotel.StartingPrice,

            };
        }

        public static Hotel MapDTOToHotel(HotelDTO hotelDTO)
        {
            return new Hotel
            {
                HotelId = hotelDTO.Id,
                OwnerId = hotelDTO.OwnerId,
                Name = hotelDTO.Name,
                Address = hotelDTO.Address,
                Description = hotelDTO.Description,
                CityId = hotelDTO.CityId,
                City = hotelDTO.City,
                NumberOfRooms = hotelDTO.NumberOfRooms,
                ImageURLs = hotelDTO.ImageURLs != null ? hotelDTO.ImageURLs : new List<string>(),
                prePrice = hotelDTO.prePrice,
                StartingPrice = hotelDTO.StartingPrice
            };
        }
    }
}

