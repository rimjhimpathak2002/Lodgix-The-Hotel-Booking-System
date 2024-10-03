// import React, { useState } from 'react';
// import './Booking.css';  // Import the CSS file
// const BookingForm = () => {
//   // State to hold form data
//   const [username, setUsername] = useState(''); // State for username input
//   const [roomId, setRoomId] = useState(1);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [status, setStatus] = useState(0);
//   const [message, setMessage] = useState('');  // For displaying messages

//   // Function to handle booking submission
//   const handleBooking = async (e) => {
//     e.preventDefault();

//     // Ensure username is provided
//     if (!username) {
//       setMessage('Please enter a username');
//       return;
//     }

//     // API URL with username dynamically inserted
//     const url = `https://localhost:7011/api/Booking/AddBooking?username=${username}`;

//     // Convert dates to ISO format
//     const formattedCheckInDate = new Date(checkInDate).toISOString();
//     const formattedCheckOutDate = new Date(checkOutDate).toISOString();

//     // Booking data object
//     const bookingData = {
//       roomId,
//       checkInDate: formattedCheckInDate,
//       checkOutDate: formattedCheckOutDate,
//       adults,
//       children,
//       totalPrice,
//       status,
//     };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       // Check for non-OK response
//       if (!response.ok) {
//         const contentType = response.headers.get('content-type');
//         let errorMessage;

//         // If response is JSON, parse it; otherwise, get text
//         if (contentType && contentType.includes('application/json')) {
//           const errorData = await response.json();
//           errorMessage = errorData.message || 'Unknown error';
//         } else {
//           errorMessage = await response.text();
//         }

//         throw new Error(`Booking failed: ${errorMessage}`);
//       }

//       const data = await response.json();  // Assuming success response is JSON
//       setMessage('Booking successful!');
//       console.log('Booking successful:', data);
//     } catch (error) {
//       console.error('Error during booking:', error);
//       setMessage(`Booking failed: ${error.message}`);
//     }
//   };

// //   return (
// //     <div>
// //       <h1>Book a Room</h1>
// //       <form onSubmit={handleBooking}>
// //         <div>
// //           <label htmlFor="username">Username:</label>
// //           <input
// //             type="text"
// //             id="username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="roomId">Room ID:</label>
// //           <input
// //             type="number"
// //             id="roomId"
// //             value={roomId}
// //             onChange={(e) => setRoomId(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="checkInDate">Check-In Date:</label>
// //           <input
// //             type="datetime-local"
// //             id="checkInDate"
// //             value={checkInDate}
// //             onChange={(e) => setCheckInDate(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="checkOutDate">Check-Out Date:</label>
// //           <input
// //             type="datetime-local"
// //             id="checkOutDate"
// //             value={checkOutDate}
// //             onChange={(e) => setCheckOutDate(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="adults">Adults:</label>
// //           <input
// //             type="number"
// //             id="adults"
// //             value={adults}
// //             onChange={(e) => setAdults(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="children">Children:</label>
// //           <input
// //             type="number"
// //             id="children"
// //             value={children}
// //             onChange={(e) => setChildren(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="totalPrice">Total Price:</label>
// //           <input
// //             type="number"
// //             id="totalPrice"
// //             value={totalPrice}
// //             onChange={(e) => setTotalPrice(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="status">Status:</label>
// //           <input
// //             type="number"
// //             id="status"
// //             value={status}
// //             onChange={(e) => setStatus(e.target.value)}
// //           />
// //         </div>
// //         <button type="submit">Submit Booking</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default BookingForm;

  
// import React, { useState } from 'react';
// import './Booking.css';  // Import the CSS file
// import Navbar from '../../components/navbar/Navbar';
// import Header from '../../components/header/Header';
// const BookingForm = () => {
//   // State to hold form data
//   const [username, setUsername] = useState('');
//   const [roomId, setRoomId] = useState(1);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [status, setStatus] = useState(0);
//   const [message, setMessage] = useState('');

//   const handleBooking = async (e) => {
//     e.preventDefault();
//     if (!username) {
//       setMessage('Please enter a username');
//       return;
//     }

//     const url = `https://localhost:7011/api/Booking/AddBooking?username=${username}`;
//     const formattedCheckInDate = new Date(checkInDate).toISOString();
//     const formattedCheckOutDate = new Date(checkOutDate).toISOString();

//     const bookingData = {
//       roomId,
//       checkInDate: formattedCheckInDate,
//       checkOutDate: formattedCheckOutDate,
//       adults,
//       children,
//       totalPrice,
//       status,
//     };

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         const contentType = response.headers.get('content-type');
//         let errorMessage;

//         if (contentType && contentType.includes('application/json')) {
//           const errorData = await response.json();
//           errorMessage = errorData.message || 'Unknown error';
//         } else {
//           errorMessage = await response.text();
//         }

//         throw new Error(`Booking failed: ${errorMessage}`);
//       }

//       const data = await response.json();
//       setMessage('Booking successful!');
//       console.log('Booking successful:', data);
//     } catch (error) {
//       console.error('Error during booking:', error);
//       setMessage(`Booking failed: ${error.message}`);
//     }
//   };

//   return ( 
//     <div>
//         <Navbar/>
//         <Header/>
//     <div className="booking-form"> {/* Add class to the main div */}
//       <h1>Book a Room</h1>
//       <form onSubmit={handleBooking}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="roomId">Room ID:</label>
//           <input
//             type="number"
//             id="roomId"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="checkInDate">Check-In Date:</label>
//           <input
//             type="datetime-local"
//             id="checkInDate"
//             value={checkInDate}
//             onChange={(e) => setCheckInDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="checkOutDate">Check-Out Date:</label>
//           <input
//             type="datetime-local"
//             id="checkOutDate"
//             value={checkOutDate}
//             onChange={(e) => setCheckOutDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="adults">Adults:</label>
//           <input
//             type="number"
//             id="adults"
//             value={adults}
//             onChange={(e) => setAdults(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="children">Children:</label>
//           <input
//             type="number"
//             id="children"
//             value={children}
//             onChange={(e) => setChildren(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="totalPrice">Total Price:</label>
//           <input
//             type="number"
//             id="totalPrice"
//             value={totalPrice}
//             onChange={(e) => setTotalPrice(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="status">Status:</label>
//           <input
//             type="number"
//             id="status"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit Booking</button>
//       </form>
//       {message && <p className="message">{message}</p>}
//     </div>
//     </div>
//   );
// };

// export default BookingForm;


import React, { useState, useEffect } from 'react';
import './Booking.css';  // Import the CSS file
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Payment from '../../components/Payment/Payment';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import ChatbotIcon from '../ChatBot/chatboticon';
import Chat from '../ChatBot/chatbot';
const BookingForm = () => {
  // State to hold form data
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState(1);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [showChat, setShowChat] = useState(false);
  // Define per-day charges
  const adultCharge = 1000; // charge per adult per day
  const childCharge = 500;   // charge per child per day
   
  // Calculate total price whenever adults, children, check-in, or check-out changes
  useEffect(() => {
    const calculateTotalPrice = () => {
      // Calculate the number of nights between check-in and check-out
      const checkIn = new Date(checkInDate);
      const checkOut = new Date(checkOutDate);
      const timeDiff = checkOut - checkIn;
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24)); // convert to days

      // Calculate total price based on the number of nights
      if (nights > 0) {
        const total = (adults * adultCharge + children * childCharge) * nights;
        setTotalPrice(total);
      } else {
        setTotalPrice(0); // reset total if dates are invalid
      }
    };

    calculateTotalPrice();
  }, [adults, children, checkInDate, checkOutDate]);
  

  const handlePayment = () => {
    // Handle payment logic here
    // Simulate payment completion
    alert('Payment successful!'); // Simulate payment success alert
    setIsPaymentDone(true); // Set payment state to true
};

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!username) {
      setMessage('Please enter a username');
      return;
    }
    // window.open("https://forms.gle/gyT91E6jfKGG1g1B6", "_blank"); // Open Google Form for payment
    const url = `https://localhost:7011/api/Booking/AddBooking?username=${username}`;
    const formattedCheckInDate = new Date(checkInDate).toISOString();
    const formattedCheckOutDate = new Date(checkOutDate).toISOString();

    const bookingData = {
      roomId,
      checkInDate: formattedCheckInDate,
      checkOutDate: formattedCheckOutDate,
      adults,
      children,
      totalPrice,
      status,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

     
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        let errorMessage;

        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          errorMessage = errorData.message || 'Unknown error';
        } else {
          errorMessage = await response.text();
        }

        throw new Error(`Booking failed: ${errorMessage}`);
      }

      const data = await response.json();
      setMessage('Booking successful!');
      // Call the email API to send a confirmation email
      await sendConfirmationEmail();
      console.log('Booking successful:', data);
    } catch (error) {
      console.error('Error during booking:', error);
      setMessage(`Booking failed: ${error.message}`);
    }
  };
  
   // Check if user is logged in on component mount
   useEffect(() => {
    const userData = localStorage.getItem('user'); // Assuming 'user' key stores user info
    if (userData) {
      setIsLoggedIn(true);
      const parsedUserData = JSON.parse(userData);
      setUsername(parsedUserData.username); // Set username from local storage
    } else {
      setMessage('You need to log in first.');
    }
  }, []); 

  const sendConfirmationEmail = async () => {
    const recipientEmail = prompt("Please enter your email address:");  // Ask the user for their email
  
    if (!recipientEmail) {
      console.error("Email address is required");
      return;
    }
  
    const bodyMessage = "Booking Confirmed";  // Customize the message as needed
    const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(recipientEmail)}&body=${encodeURIComponent(bodyMessage)}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
      });
  
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error during email sending:", error);
    }
  };
  
  
  // Example usage after booking is confirmed
  const handleBookingSuccess = (recipientEmail) => {
    sendConfirmationEmail(recipientEmail);
  };
  

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Add content to the PDF
    doc.setFontSize(22);
    doc.text("Booking Invoice", 20, 20);
    doc.setFontSize(16);
    doc.text(`Username: ${username}`, 20, 40);
    doc.text(`Room ID: ${roomId}`, 20, 50);
    doc.text(`Check-In Date: ${new Date(checkInDate).toLocaleString()}`, 20, 60);
    doc.text(`Check-Out Date: ${new Date(checkOutDate).toLocaleString()}`, 20, 70);
    doc.text(`Adults: ${adults}`, 20, 80);
    doc.text(`Children: ${children}`, 20, 90);
    doc.text(`Total Price: ₹${totalPrice}`, 20, 100);

    // Save the PDF
    doc.save('invoice.pdf');
  };
  

    // Render a message if not logged in
    if (!isLoggedIn) {
      return <div>{message}</div>;
    } 
    else 
    {

  return ( 
    <div>
      <Navbar/>
      <Header/>
      <div className="booking-form"> {/* Add class to the main div */}
        <h1>Book a Room</h1>
        <form onSubmit={handleBooking}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="roomId">Room ID:</label>
            <input
              type="number"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="checkInDate">Check-In Date:</label>
            <input
              type="datetime-local"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="checkOutDate">Check-Out Date:</label>
            <input
              type="datetime-local"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="adults">Adults:</label>
            <input
              type="number"
              id="adults"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
              required
            />
          </div>
          <div>
            <label htmlFor="children">Children:</label>
            <input
              type="number"
              id="children"
              value={children}
              onChange={(e) => setChildren(Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="totalPrice">Total Price:</label>
            <input
              type="number"
              id="totalPrice"
              value={totalPrice}
              readOnly // make this field read-only
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="number"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          {/* <button onclick={handlePayment}>Proceed to Payment</button> */}
          
          <button type="submit">Submit Booking</button>
        </form>
        {message && <p className="message">{message}</p>}
        {message === 'Booking successful!' && (
          <button onClick={generatePDF}>Download Invoice</button>
        )}
      </div>
      {/* <ChatbotIcon /> */}
      <Footer/>
      {/* Chatbot Icon */}
      <ChatbotIcon onClick={() => setShowChat(!showChat)} />

      {/* Chatbox */}
      {showChat && (
        <div className="chatbox">
          <Chat />
        </div>
      )}
    </div>
  );
};
}

export default BookingForm;


















