﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Repository;

    public class UserRepository : IRepository<string, User>
{
        private readonly AppDbContext _context;
        //private readonly ILogger<UserRepository> _logger;

        public UserRepository(AppDbContext context,ILogger<UserRepository> logger) {
            _context = context;
            //_logger = logger;
        }
        public async Task<User> Add(User item)
        {
            //_logger.LogInformation("Adding user: {Username}", item.Username);
            _context.Users.Add(item);
            await _context.SaveChangesAsync();
            //_logger.LogInformation("User added successfully: {Username}", item.Username);
            return item;
        }


        public async Task<User> Delete(string key)
        {
            //_logger.LogInformation("Deleting user with username: {Username}", key);
            var user =await GetById(key);
            if (user != null) { 
                _context.Users.Remove(user);
                _context.SaveChanges();
                //_logger.LogInformation("User deleted successfully: {Username}", key);
                return user;
            }
            //_logger.LogWarning("User not found for deletion: {Username}", key);
            return null;
        }

        public async Task<List<User>> GetAll()
        {
            //_logger.LogInformation("Getting all users");
            var users = await _context.Users
                .Include(u => u.Bookings)
                .Include(u => u.Reviews)
                .Include(u => u.Hotels)
                .ToListAsync(); 
            return users;
        }

        public async Task<User> GetById(string key)
        {
            //_logger.LogInformation("Getting user by username: {Username}", key);
            var user = await _context.Users
                .Include(u => u.Bookings)
                .Include(u => u.Reviews)
                .Include(u => u.Hotels)
                .FirstOrDefaultAsync(u => u.Username == key);
            return user;
        }


        public async Task<User> Update(User item)
        {
            //_logger.LogInformation("Updating user: {Username}", item.Username);
            var user=await GetById(item.Username);
            if(user != null)
            {
                _context.Entry<User>(item).State = EntityState.Modified;
                _context.SaveChanges();
                //_logger.LogInformation("User updated successfully: {Username}", item.Username);
                return item;
            }
            return null;
        }
    }


