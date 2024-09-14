using System;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Interface
{
    public interface IHotelAmenityService
    {
        public Task<List<HotelAmenity>> GetHotelAmenities(int hotelId);
    }
}

