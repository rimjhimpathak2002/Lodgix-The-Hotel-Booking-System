using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Infrastructure.Enums;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Mapper;
using SampleHotelBooking.Repository;

namespace SampleHotelBooking.Service
{
    public class PaymentService : IPaymentService
    {
        private readonly PaymentRepository _paymentRepository;

        public PaymentService(PaymentRepository paymentRepository)
        {
            _paymentRepository = paymentRepository;
        }

        public async Task<Payment> AddPayment(PaymentDTO paymentDto)
        {
            Payment newPayment = PaymentMapper.MapDTOToPayment(paymentDto);
            newPayment.PaymentDate = DateTime.Now;

            var addedPayment = await _paymentRepository.Add(newPayment);
            return addedPayment;
        }

        public async Task<Payment> DeletePayment(int id)
        {
            var payment = await GetPayment(id);
            if (payment != null)
            {
                return await _paymentRepository.Delete(id);
            }
            throw new Exception($"Payment with ID {id} not found.");
        }

        public async Task<List<Payment>> GetAllPayments()
        {
            var payments = await _paymentRepository.GetAll();
            if (payments != null)
            {
                return payments;
            }
            throw new Exception("No payments found.");
        }

        public async Task<Payment> GetPayment(int id)
        {
            var payment = await _paymentRepository.GetById(id);
            if (payment != null)
            {
                return payment;
            }
            throw new Exception($"Payment with ID {id} not found.");
        }

        public async Task<Payment> UpdatePaymentStatus(int id, PaymentStatus status)
        {
            var payment = await GetPayment(id);
            if (payment != null)
            {
                payment.Status = status;
                return await _paymentRepository.Update(payment);
            }
            throw new Exception($"Payment with ID {id} not found.");
        }

        Task<Payment> IPaymentService.UpdatePayment(int id, PaymentStatus status)
        {
            throw new NotImplementedException();
        }
    }

}
