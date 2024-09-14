using Microsoft.EntityFrameworkCore;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Interface;

namespace SampleHotelBooking.Repository
{
    public class PaymentRepository : IRepository<int, Payment>
    {
        private readonly AppDbContext _context;
        //private readonly ILogger<PaymentRepository> _logger;

        public PaymentRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Payment> Add(Payment item)
        {
            _context.Payments.Add(item);
            await _context.SaveChangesAsync();
            //_logger.LogInformation("Payment added: {PaymentId}", item.PaymentId);
            return item;
        }

        public async Task<Payment> Delete(int key)
        {
            var payment = await GetById(key);
            if (payment != null)
            {
                _context.Payments.Remove(payment);
                await _context.SaveChangesAsync();
                //_logger.LogInformation("Payment deleted: {PaymentId}", key);
                return payment;
            }
            else
            {
                throw new Exception($"Payment with ID {key} not found.");
            }
        }

        public async Task<List<Payment>> GetAll()
        {
            var payments = await _context.Payments
                .Include(p => p.Booking) // Assuming a Payment has a Booking navigation property
                .ToListAsync();
            //_logger.LogInformation("Retrieved all payments.");
            return payments;
        }

        public async Task<Payment> GetById(int key)
        {
            var payment = await _context.Payments
                .Include(p => p.Booking) // Assuming a Payment has a Booking navigation property
                .FirstOrDefaultAsync(p => p.PaymentId == key);
            if (payment != null)
            {
                //_logger.LogInformation("Retrieved payment: {PaymentId}", key);
                return payment;
            }
            else
            {
                throw new Exception($"Payment with ID {key} not found.");
            }
        }

        public async Task<Payment> Update(Payment item)
        {
            var payment = await GetById(item.PaymentId);
            if (payment != null)
            {
                _context.Entry<Payment>(item).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                //_logger.LogInformation("Payment updated: {PaymentId}", item.PaymentId);
                return item;
            }
            else
            {
                throw new Exception($"Payment with ID {item.PaymentId} not found.");
            }
        }
    }

}
