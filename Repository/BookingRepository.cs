using System;
using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Repository
{
    public class BookingRepository : IRepository<int, Booking>
    {
        private readonly AppDbContext _context;
        //private readonly ILogger<BookingRepository> _logger;

        public BookingRepository(AppDbContext context)
        {
            _context = context;
            
        }
        public async Task<Booking> Add(Booking item)
        {
            _context.Bookings.Add(item);
            await _context.SaveChangesAsync();
            //_logger.LogInformation("Booking added: {BookingId}", item.BookingID);
            return item;

        }

        public async Task<Booking> Delete(int key)
        {
            var booking = await GetById(key);
            if (booking != null)
            {
                _context.Bookings.Remove(booking);
                _context.SaveChanges();
                //_logger.LogInformation("Booking deleted: {BookingId}", key);
                return booking;
            }
            else
            {
                throw new Exception($"Reservation with ID {key} not found.");
            }
        }

        public async Task<List<Booking>> GetAll()
        {
            var bookings = _context.Bookings
                .Include(b => b.Room)
                .ToList();
            //_logger.LogInformation("Retrieved all bookings.");
            return await Task.FromResult(bookings);
        }

        public async Task<Booking> GetById(int key)
        {
            var booking = await _context.Bookings
                .Include(b => b.Room)
                .FirstOrDefaultAsync(b => b.BookingID == key);
            if (booking != null)
            {
                //_logger.LogInformation("Retrieved booking: {BookingId}", key);
                return booking;
            }
            else
            {
                throw new Exception($"Reservation with ID {key} not found.");
            }
        }


        public async Task<Booking> Update(Booking item)
        {
            var booking = await GetById(item.BookingID);
            if (booking != null)
            {
                _context.Entry<Booking>(item).State = EntityState.Modified;
                _context.SaveChanges();
                //_logger.LogInformation("Booking updated: {BookingId}", item.ReservationId);
                return item;
            }
            else
            {
                throw new Exception($"Reservation with ID {item.BookingID} not found.");
            }
        }
    }
}

