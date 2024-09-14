using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Mapper
{
     public class AmenityMapping
    {
        public Amenity _amenity;

        public AmenityMapping(AmenityDTO amenitydto)
        {
            _amenity = new Amenity
            {
                AmenityId = amenitydto.Id,
                Name = amenitydto.Name
            };
        }

        public Amenity GetAmenity()
        {

            return _amenity;
        }
    }
}

