using System;
using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Service
{
    public class HotelAmenityService : IHotelAmenityService
    {
        private readonly AppDbContext _context;

        public HotelAmenityService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<HotelAmenity>> GetHotelAmenities(int hotelId)
        {
            return await _context.HotelAmenities
                                .Include(ha => ha.Amenity)
                                .Where(ha => ha.HotelId == hotelId)
                                .ToListAsync();
        }
    }
}

