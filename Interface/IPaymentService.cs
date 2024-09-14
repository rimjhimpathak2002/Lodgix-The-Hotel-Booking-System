using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Enums;
using SampleHotelBooking.Infrastructure.Model;

namespace SampleHotelBooking.Interface
{
    public interface IPaymentService
    {
        // Get payment details by ID
        public Task<Payment> GetPayment(int id);

        // Get all payments
        public Task<List<Payment>> GetAllPayments();

        // Add a new payment
        public Task<Payment> AddPayment(PaymentDTO payment);

        // Update the status of a payment
        public Task<Payment> UpdatePayment(int id, PaymentStatus status);

        // Delete a payment by ID
        public Task<Payment> DeletePayment(int id);

        // Get payments associated with a reservation ID
      //  public Task<List<Payment>> GetPaymentsByReservationId(int reservationId);

        // Get the count of total payments
     //   public Task<int> GetPaymentsCount();

        // Get payments by a particular method (e.g., Credit Card, PayPal)
     //   public Task<List<Payment>> GetPaymentsByMethod(string paymentMethod);

        // Check if a payment exists for a given reservation ID
     //   public Task<bool> IsPaymentExistsForReservation(int reservationId);
    }

}
