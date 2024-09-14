using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Repository;

    public class CityRepository : IRepository<int, City>
{
        private readonly AppDbContext _context;
        //private readonly ILogger<UserRepository> _logger;

        public CityRepository(AppDbContext context) {
            _context = context;
            //_logger = logger;
        }
        public async Task<City> Add(City city)
        {
            //_logger.LogInformation("Adding user: {Username}", item.Username);
            _context.Cities.Add(city);
            await _context.SaveChangesAsync();
            //_logger.LogInformation("User added successfully: {Username}", item.Username);
            return city;
        }


        public async Task<City> Delete(int id)
        {
            //_logger.LogInformation("Deleting user with username: {Username}", key);
            var city =await GetById(id);
            if (city != null) { 
                _context.Cities.Remove(city);
                _context.SaveChanges();
                //_logger.LogInformation("User deleted successfully: {Username}", key);
                return city;
            }
            //_logger.LogWarning("User not found for deletion: {Username}", key);
            return null;
        }

        public async Task<List<City>> GetAll()
        {
            //_logger.LogInformation("Getting all users");
            var cities = await _context.Cities
                //.Include(u => u.Hotels)
                .ToListAsync(); 
            return cities;
        }

        public async Task<City> GetById(int key)
        {
            //_logger.LogInformation("Getting user by username: {Username}", key);
            var city = await _context.Cities
                //.Include(u => u.Hotels)
                .FirstOrDefaultAsync(u => u.CityID == key);
            return city;
        }


        public async Task<City> Update(City id)
        {
            //_logger.LogInformation("Updating user: {Username}", item.Username);

        var city=await GetById(id.CityID);
            if(city != null)
            {
                _context.Entry<City>(id).State = EntityState.Modified;
                _context.SaveChanges();
                //_logger.LogInformation("User updated successfully: {Username}", item.Username);
                return city;
            }
            return null;
        }
    }


