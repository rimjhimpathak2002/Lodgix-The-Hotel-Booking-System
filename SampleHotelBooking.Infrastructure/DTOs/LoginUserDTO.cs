﻿using System.Text.Json.Serialization;

namespace SampleHotelBooking.Infrastructure.DTOs
{
    public class LoginUserDTO
    {
        public string Username {  get; set; }
        public string Password { get; set; }
        //public string Role { get; set; }
        //public string Token { get; set; }
    }
}
