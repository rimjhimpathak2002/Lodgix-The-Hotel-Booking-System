using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using SampleHotelBooking.Domain.Enums;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class Booking
	{
        public int BookingID { get; set; }
        [Key]

        [Required]
        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        [ForeignKey("Room")]
        public int RoomId { get; set; }

        [Required]
        public DateTime CheckInDate { get; set; }

        [Required]
        public DateTime CheckOutDate { get; set; }

        [Required]
        public int Adults { get; set; }

        [Required]
        public int Children { get; set; }

        [Required]
        public float TotalPrice { get; set; }

        [Required]
        public BookingStatus Status { get; set; }
        public DateTime BookedDate { get; set; }

        // Navigation properties
        [JsonIgnore]
        public User? User { get; set; }
        [JsonIgnore]
        public Room? Room { get; set; }
    }


}


