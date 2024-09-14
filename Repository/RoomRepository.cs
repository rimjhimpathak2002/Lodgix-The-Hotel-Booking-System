using System;
using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Repository
{
    public class RoomRepository : IRepository<int, Room>
    {
        private readonly AppDbContext _context;

        public RoomRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Room> Add(Room item)
        {
            _context.Rooms.Add(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<Room> Delete(int key)
        {
            var room = await GetById(key);
            if (room != null)
            {
                _context.Rooms.Remove(room);
                _context.SaveChanges();
                return room;
            }
            throw new Exception($"Room with ID {key} not found.");
        }


        public async Task<List<Room>> GetAll()
        {
            return await Task.FromResult(_context.Rooms.Include(r => r.Bookings).ToList());
        }

        public async Task<Room> GetById(int key)
        {
            var room = await Task.FromResult(_context.Rooms.Include(r => r.Bookings)
                .FirstOrDefault(r => r.RoomId == key));

            if (room == null)
            {
                throw new Exception($"Room with ID {key} not found.");
            }

            return room;
        }


        public async Task<Room> Update(Room item)
        {
            var room = await GetById(item.RoomId);
            if (room != null)
            {
                _context.Entry<Room>(item).State = EntityState.Modified;
                _context.SaveChanges();
                return item;
            }
            return null;

        }
    }
}

