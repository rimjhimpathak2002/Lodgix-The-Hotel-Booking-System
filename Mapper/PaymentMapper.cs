using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Enums;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Mapper
{
    public static class PaymentMapper
    {
        public static PaymentDTO MapPaymentToDTO(Payment payment)
        {
            return new PaymentDTO
            {
                PaymentID = payment.PaymentId,
                ReservationID = payment.ReservationId,
                Amount = payment.Amount,
                PaymentStatus = (PaymentStatus)payment.Status,
                PaymentDate = payment.PaymentDate,
                PaymentMethod = payment.PaymentMethod
            };
        }

        public static Payment MapPaymentDTOToEntity(PaymentDTO paymentDTO)
        {
            return new Payment
            {
                PaymentId = paymentDTO.PaymentID,
                ReservationId = paymentDTO.ReservationID,
                Amount = paymentDTO.Amount,
                Status = PaymentStatus.Pending,  // Assuming default status
                PaymentDate = paymentDTO.PaymentDate,
                PaymentMethod = paymentDTO.PaymentMethod
            };
        }

        // Maps PaymentDTO to Payment entity
        public static Payment MapDTOToPayment(PaymentDTO paymentDto)
        {
            return new Payment
            {
                PaymentId = paymentDto.PaymentID,
                ReservationId = paymentDto.ReservationID,
                Amount = paymentDto.Amount,
                Status = paymentDto.PaymentStatus,
                PaymentDate = paymentDto.PaymentDate,
                PaymentMethod = paymentDto.PaymentMethod
            };
        }
    }

}
