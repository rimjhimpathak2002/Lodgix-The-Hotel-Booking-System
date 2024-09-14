
using Microsoft.IdentityModel.Tokens;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Enums;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Mapper;
using System.Security.Cryptography;
using System.Text;

namespace SampleHotelBooking.Service;

    public class UserService : IUserService
    {
        private readonly IRepository<string, User> _repo;
        private readonly ITokenService _tokenservice;
        private readonly IConfiguration _configuration;


    public UserService(IRepository<string,User> repository,ITokenService tokenService, IConfiguration configuration) {
            _repo=repository;
            _tokenservice=tokenService;
        _configuration = configuration;
        }
        public async Task<LoginUserDTO> Login(LoginUserDTO user)
        {
            var myuser = await _repo.GetById(user.Username);
            if(myuser == null) {
            throw new Exception("User Not Found");
            }
           var userPassword = GetPasswordEncrypted(user.Password, myuser.Key);
            var checkPasswordMatch = ComparePasswords(myuser.Password, userPassword);
            if (checkPasswordMatch)
            {
            //user.Password = "";
            //user.Role = myuser.UserType.ToString();
            //user.Token = await _tokenservice.GenerateToken(user);
            //_logger.LogInformation("User logged in successfully: {Username}", user.Username);
            //   TokenService jwtTokenString = new TokenService(_configuration);
            //   string tokenString = jwtTokenString.GenerateJWT(user.Username, "Users");
             return user;
            
            }


        throw new Exception("Check Your Credentials Again"); 
    }
        private bool ComparePasswords(byte[] password, byte[] userPassword)
        {
            for (int i = 0; i < password.Length; i++)
            {
                if (password[i] != userPassword[i])
                    return false;
            }
            return true;
        }

        private byte[] GetPasswordEncrypted(string password, byte[] key)
        {
            HMACSHA512 hmac = new HMACSHA512(key);
            var userpassword = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return userpassword;
        }

        public async Task<LoginUserDTO> Register(RegisterUserDTO user)
        {
            User myuser=new RegisterToUser(user).GetUser();
            myuser=await _repo.Add(myuser);
            LoginUserDTO result = new LoginUserDTO
            {
                Username = myuser.Username
                //Role = myuser.UserType.ToString(),
            };
            return result;
        }

        public Task<List<User>> GetAllUsers()
        {
           
            var users = _repo.GetAll();
            if(users!=null) return users;
        throw new Exception("User Not Found");
    }

        public Task<User> GetUser(string username)
        {
            
            var user = _repo.GetById(username);
            if (user == null) throw new Exception("User Not Found");
        return user;
        }

        public async Task<User> DeleteUser(string username)
        {
           
            var user = await GetUser(username   );
            if (user != null)
            {
                await _repo.Delete(username);
                return user;
            }
        throw new Exception("User Not Found");
    }

        public async Task<User> UpdatePassword(string username,string password)
        {
          
            var user = await _repo.GetById(username);
            if (user != null)
            { 
                var newKey = new HMACSHA512().Key;
                var newPasswordHash = GetPasswordEncrypted(password,newKey);

                user.Password = newPasswordHash;
                user.Key = newKey;
                await _repo.Update(user);
              
                return user;
            }
        throw new Exception("User Not Found");
    }

        public async Task<ICollection<Booking>> GetUserReservations(string username)
        {

            var user= await _repo.GetById(username);
            if (user != null)
            {
                var Reservations = user.Bookings;
                if(Reservations.IsNullOrEmpty()) throw new Exception("Booking Not Found");
            return Reservations;
            }
        throw new Exception("User Not Found");
    }
        public async Task<User> UpdateUserProfile(string username, string firstName, string lastName, string contactNumber, string email, DateTime dateofbirth)
        {
            var existingUser = await GetUser(username);
            if (existingUser != null)
            {
                existingUser.Username = username;
                existingUser.FirstName = firstName;
                existingUser.LastName = lastName;
                existingUser.ContactNumber = contactNumber;
                existingUser.Email = email;
                existingUser.DateofBirth = dateofbirth;

                existingUser = await _repo.Update(existingUser);
                return existingUser;
            }
            return null;
        }
        public async Task<ICollection<Review>> GetUserReviews(string username)
        {
            var user = await GetUser(username); 
            if (user != null)
            {
                var reviews=user.Reviews;
                if(reviews.IsNullOrEmpty()) { throw new Exception("Review Not Found"); }
                return reviews;
            }
        throw new Exception("User Not Found");
    }
       
        public async Task<User> GetUserByUsernameOrEmail(string usernameOrEmail)
        {
 
            var users = await _repo.GetAll();
            var user = users.FirstOrDefault(u => u.Username == usernameOrEmail || u.Email == usernameOrEmail);
            if (user != null) return user;
        throw new Exception("User Not Found");
    }
        public async Task<List<User>> GetHotelOwners()
        {
            var users = await _repo.GetAll();
            if (users == null || !users.Any())
            {
            throw new Exception("User Not Found");
        } 

            return users.Where(user => user.UserType == UserType.HotelOwner).ToList();
        }

        public async Task<User> GetUserbyId(int userId)
        {
            try
            {


                var users = await _repo.GetAll();

                var user = users.FirstOrDefault(u => u.UserId == userId);

                if (user != null) { 

                    return user;
                }
                else
                {

                throw new Exception("User Not Found");
            }
            }
            catch (Exception ex)
            {
 
                throw; 
            }
        }

    }

