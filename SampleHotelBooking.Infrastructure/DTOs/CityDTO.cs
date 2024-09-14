using System;
using SampleHotelBooking.Infrastructure.Model;
using System.ComponentModel.DataAnnotations;

namespace SampleHotelBooking.Infrastructure.DTOs
{
	public class CityDTO
	{
        public int CityID { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
        public string PinCode { get; set; }
        public ICollection<string>? ImageURLs { get; set; } 

        public DateTime? CreatedDate { get; set; }  = DateTime.Now;
        public int visitCount { get; set; }
    }
}

