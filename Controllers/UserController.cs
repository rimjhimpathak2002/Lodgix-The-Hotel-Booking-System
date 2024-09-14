
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Collections.ObjectModel;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService=userService;
            
        }
        [HttpPost("Register")]
        public async Task<ActionResult<LoginUserDTO>> Register(RegisterUserDTO user)
        {
            try
            {
                var result = await _userService.Register(user);
                return Ok(result); 
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while registering a user."); 
            }
        } 

        [HttpPost("Login")]
        public async Task<ActionResult<LoginUserDTO>> Login(LoginUserDTO user)
        {
            try
            {
                var result = await _userService.Login(user);
                return Ok(result);
            }
            catch (Exception iuse)
            {
                return Unauthorized("Invalid username or password");
            }
        }

        [Authorize]
        [HttpDelete("DeleteUser")]
        public async Task<ActionResult<User>> DeleteUser(string username)
        {
            try
            {
                var deletedUser = await _userService.DeleteUser(username);
                return Ok(deletedUser);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        } 

        [Authorize(Roles = "Admin")]
        [HttpGet("GetAllUsers")]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            try
            {
                var users = await _userService.GetAllUsers();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("GetByUsername")]
        public async Task<ActionResult<User>> GetUserByUsername(string username)
        {
            try
            {
                var user=await _userService.GetUser(username);
                if (user == null) return NotFound("User not found.");
                return Ok(user);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        
        [HttpPut("{username}/update-password")]
        public async Task<ActionResult<User>> UpdatePassword(string username, string password)
        {
            try
            {
                var updatedUser=await _userService.UpdatePassword(username, password);
                return Ok(updatedUser);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{username}/Reservations")]
        public async Task<ActionResult<ICollection<Booking>>> GetUserReservations(string username)
        {
            try
            {
                var Reservations=await _userService.GetUserReservations(username);
                return Ok(Reservations);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{username}/reviews")]
        public async Task<ActionResult<ICollection<Review>>> GetUserReviews(string username)
        {
            try
            {
                var reviews=await _userService.GetUserReviews(username);
                return Ok(reviews);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        
        [HttpPut("UpdateUserProfile/{username}")]
        public async Task<ActionResult> UpdateUserProfile(string username, UpdateUserDTO updateUserDto)
        {
            try
            {
                var user = await _userService.UpdateUserProfile(username, updateUserDto.FirstName, updateUserDto.LastName, updateUserDto.ContactNumber, updateUserDto.Email, updateUserDto.DateOfBirth);
                if (user != null)
                {
                    return Ok(user);
                }
                return NotFound($"User with username {username} not found.");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error updating the user profile");
            }
        }

        [HttpGet("by-username-or-email/{usernameOrEmail}")]
        public async Task<IActionResult> GetUserByUsernameOrEmail(string usernameOrEmail)
        {
            try
            {
                var user = await _userService.GetUserByUsernameOrEmail(usernameOrEmail);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            
        }
        //[Authorize(Roles ="Admin")]
        [HttpGet("GetHotelOwners")]
        public async Task<ActionResult<List<User>>> GetHotelOwners()
        {
            try
            {
                var hotelOwners = await _userService.GetHotelOwners();
                return Ok(hotelOwners);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetUserById(int userId)
        {
            try
            {
                var user = await _userService.GetUserbyId(userId);
                return Ok(user);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(500, "An error occurred while getting user by ID");
            }
        }

    }
}
