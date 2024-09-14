using System;
using System.ComponentModel.DataAnnotations;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class City
	{
        [Key]
        public int CityID { get; set; }
        public string Description { get; set; }
        [Required]
        public string Name { get; set; }
        public string PinCode { get; set; }
        public ICollection<Hotel> Hotels { get; set; } = new List<Hotel>();
        [Required]
        public ICollection<string>? ImageURLs { get; set; }
        public DateTime CreateDat { get; set; } = DateTime.Now;
        public int VisitCount { get; set; }

        public City()
        {
            ImageURLs = new List<string>();
        }
    }
}

