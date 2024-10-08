﻿using System.ComponentModel.DataAnnotations;

namespace SampleHotelBooking.Infrastructure.DTOs
{
    public class UpdateUserDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ContactNumber { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}