﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class Room
	{
        [Key]
        public int RoomId { get; set; }

        [ForeignKey("Hotel")]
        public int HotelId { get; set; }
        [Required]
        public float RoomSize { get; set; }

        [Required]
        public string RoomType { get; set; }

        [Required]
        public float PricePerNight { get; set; }
        public ICollection<string>? ImageURLs { get; set; }

        [Required]
        public int Capacity { get; set; }
        public bool Available { get; set; }

        // Navigation property
        public Hotel? Hotel { get; set; }
        [JsonIgnore]
        public ICollection<Booking>? Bookings { get; set; }
        public Room()
        {
            ImageURLs = new List<string>();
        }
    }
}

