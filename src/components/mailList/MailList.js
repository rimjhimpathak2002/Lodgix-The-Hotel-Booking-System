import "./MailList.css"
import { useState } from "react";
const MailList = () => {
  const [email, setEmail] = useState("");

  const sendConfirmationEmail = async () => {
    if (!email) {
      console.error("Email address is required");
      alert("Please enter a valid email address.");
      return;
    }

    const bodyMessage = "Thank you for subscribing! We will Get Back to you soon";  // Customize the message as needed
    const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(email)}&body=${encodeURIComponent(bodyMessage)}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
      });

      if (response.ok) {
        console.log("Email sent successfully");
        alert("Subscription successful! A confirmation email has been sent.");
      } else {
        console.error("Error sending email");
        alert("There was an error sending the email. Please try again.");
      }
    } catch (error) {
      console.error("Error during email sending:", error);
      alert("There was an error sending the email. Please try again.");
    }
  };
  
  
  // Example usage after booking is confirmed
  const handleBookingSuccess = (recipientEmail) => {
    sendConfirmationEmail(recipientEmail);
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
      <input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // Capture input value
        />
      
        <button onClick={sendConfirmationEmail}>Subscribe</button>
       
      </div>
    </div>
  )
}

export default MailList