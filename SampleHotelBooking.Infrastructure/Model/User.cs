﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using SampleHotelBooking.Infrastructure.Enums;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class User 
	{
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
        public DateTime DateofBirth { get; set; }

        [Required]
        public string Email { get; set; }
        public string ContactNumber { get; set; }

        [Required]
        [JsonIgnore]
        public byte[] Password { get; set; }
        [JsonIgnore]
        public byte[] Key { get; set; }

        [Required]
        public UserType UserType { get; set; }
        [Required]
        public DateTime RegistrationDate { get; set; } = DateTime.Now;

        // Navigation properties
        [JsonIgnore]
        public ICollection<Booking>? Bookings { get; set; }
        [JsonIgnore]
        public ICollection<Review>? Reviews { get; set; }
        [JsonIgnore]
        public ICollection<Hotel>? Hotels { get; set; }


    }

}

