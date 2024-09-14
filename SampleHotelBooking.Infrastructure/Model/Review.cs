using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class Review
	{
        [Key]
        public int ReviewId { get; set; }

        [Required]
        [ForeignKey("Hotel")]
        public int HotelId { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        public float Rating { get; set; }

        public string? Comment { get; set; }

        [Required]
        public DateTime DatePosted { get; set; }

        // Navigation properties
        [JsonIgnore]
        public Hotel? Hotel { get; set; }
        [JsonIgnore]
        public User? User { get; set; }
    }
}

