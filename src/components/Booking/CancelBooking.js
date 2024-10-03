import React, { useState } from 'react';
import './CancelBooking.css'; // Create or use your existing CSS file for modal styling

const CancelBookingModal = ({ isOpen, onClose }) => {
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  const handleCancelBooking = async () => {
    const userId = JSON.parse(localStorage.getItem('user')).id; // Assuming user ID is stored in user object
    const url = `https://localhost:7011/api/Booking/DeleteBooking?id=${bookingId}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bookingId }), // Send the booking ID in the request body if needed
    });

    if (response.ok) {
      setMessage('Booking canceled successfully!');
      setBookingId(''); // Clear the input after successful cancellation
    } else {
      setMessage('Failed to cancel booking. Please try again.');
    }
  };

  if (!isOpen) return null; // Don't render anything if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Cancel Booking</h3>
        <input
          type="text"
          placeholder="Enter Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          className="booking-id-input"
        />
        <button onClick={handleCancelBooking} className="cancel-booking-button">
          Confirm Cancellation
        </button>
        <button onClick={onClose} className="close-modal-button">
          Close
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default CancelBookingModal;



