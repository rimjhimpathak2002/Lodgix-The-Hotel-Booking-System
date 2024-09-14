using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using SampleHotelBooking.Infrastructure.Enums;

namespace SampleHotelBooking.Infrastructure.Model
{
	public class InvoiceRecord
	{
        [Key]
        public int InvoiceRecordId { get; set; }
        [ForeignKey("Booking")]
        public int BookingID { get; set; }
        public Booking Booking { get; set; }
        [ForeignKey("Room")]
        public int RoomID { get; set; }
        public decimal TotalPrice { get; set; }
        public PaymentStatus PaymentStatus { get; set; }

    }
}

