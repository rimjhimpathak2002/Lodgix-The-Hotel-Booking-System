using System;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Mapper;

namespace SampleHotelBooking.Service
{
    public class RoomService : IRoomService
    {
        private readonly IRepository<int, Room> _repository;
        //private readonly ILogger<IRoomService> _logger;

        public RoomService(IRepository<int, Room> repository, ILogger<IRoomService> logger)
        {
            _repository = repository;
            //_logger = logger;
        }
        public async Task<Room> AddRoom(RoomDTO room)
        {
            Room newroom = RoomMapping.MapRoomDTOToEntity(room);
            newroom = await _repository.Add(newroom);
            return newroom;
        }

        public async Task<Room> DeleteRoom(int id)
        {
            var room = await GetRoom(id);
            if (room != null)
            {
                await _repository.Delete(id);
                return room;
            }
            throw new Exception();
        }

        public async Task<List<Room>> GetAllRooms()
        {
            var rooms = await _repository.GetAll();
            if (rooms != null) { return rooms; }
            throw new Exception();
        }

        public async Task<Room> GetRoom(int id)
        {
            var room = await _repository.GetById(id);
            if (room != null) { return room; }
            throw new Exception();
        }

        public async Task<ICollection<Booking>> GetRoomReservations(int id)
        {
            var room = await GetRoom(id);
            if (room == null) { throw new Exception(); }
            var bookings = room.Bookings;
            if (bookings == null) { throw new Exception(); }
            return bookings;
        }

        public async Task<Room> UpdateRoomPrice(int id, int price)
        {
            var room = await GetRoom(id);
            if (room != null)
            {
                room.PricePerNight = price;
                await _repository.Update(room);
                return room;
            }
            throw new Exception();
        }

        public async Task<Room> UpdateRoomDetails(RoomDTO roomDTO)
        {
            var existingRoom = await GetRoom(roomDTO.RoomId);
            if (existingRoom == null) throw new Exception();

            existingRoom.RoomSize = roomDTO.RoomSize;
            existingRoom.RoomType = roomDTO.RoomType;
            existingRoom.PricePerNight = roomDTO.PricePerNight;
            existingRoom.Capacity = roomDTO.Capacity;
            existingRoom.Available = roomDTO.Available;

            await _repository.Update(existingRoom);
            return existingRoom;
        }

        public async Task<ICollection<Room>> GetAvailableRooms()
        {

            var rooms = await _repository.GetAll();
            if (rooms == null) throw new Exception();
            var availableRooms = rooms.Where(r => r.Available).ToList();
            return availableRooms;
        }
    }

 }

