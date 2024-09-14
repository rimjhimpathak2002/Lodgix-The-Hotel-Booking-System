using System;
using System.ComponentModel.DataAnnotations;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class Amenity
	{
        [Key]
        public int AmenityId { get; set; }

        [Required]
        public string Name { get; set; }
        //navigation properties
        public ICollection<HotelAmenity>? HotelAmenity { get; set; }
    }
}

