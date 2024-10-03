// import "./MailList.css"; // You can also keep the styles from the previous MailList component
// import { useState } from "react";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [message, setMessage] = useState("");

//   // Function to generate a random OTP
//   const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//   };

//   const sendOtpEmail = async () => {
//     if (!email) {
//       console.error("Email address is required");
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const otp = generateOtp(); // Generate OTP
//     const bodyMessage = `Your OTP for password reset is: ${otp}`;
//     const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(email)}&body=${encodeURIComponent(bodyMessage)}`;

//     try {
//       const response = await fetch(url, {
//         method: 'POST', // Ensure you're using the correct method based on your backend
//       });

//       if (response.ok) {
//         console.log("OTP sent successfully");
//         alert("OTP has been sent to your email!");
//         setOtpSent(true);
//         setMessage("OTP has been sent to your email!");
//       } else {
//         console.error("Error sending OTP");
//         alert("There was an error sending the OTP. Please try again.");
//         setMessage("Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Error during OTP sending:", error);
//       alert("There was an error sending the OTP. Please try again.");
//       setMessage("Failed to send OTP");
//     }
//   };

//   return (
//     <div className="mail">
//       <h1 className="mailTitle">Forgot Password</h1>
//       {message && <p>{message}</p>}
//       <div className="mailInputContainer">
//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)} // Capture input value
//         />
//         <button onClick={sendOtpEmail}>Send OTP</button>
//       </div>
//       {otpSent && <p>Please check your email for the OTP.</p>}
//     </div>
//   );
// };

// export default ForgotPassword;

// import "./MailList.css"; // You can also keep the styles from the previous MailList component
// import { useState } from "react";
// import axios from "axios"; // Make sure to import axios for API calls

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState(""); // Store the generated OTP
//   const [newPassword, setNewPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isVerified, setIsVerified] = useState(false);

//   // Function to generate a random OTP
//   const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//   };

//   const sendOtpEmail = async () => {
//     if (!email) {
//       console.error("Email address is required");
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const otp = generateOtp(); // Generate OTP
//     setGeneratedOtp(otp); // Store the generated OTP
//     const bodyMessage = `Your OTP for password reset is: ${otp}`;
//     const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(email)}&body=${encodeURIComponent(bodyMessage)}`;

//     try {
//       const response = await fetch(url, {
//         method: 'POST', // Ensure you're using the correct method based on your backend
//       });

//       if (response.ok) {
//         console.log("OTP sent successfully");
//         alert("OTP has been sent to your email!");
//         setOtpSent(true);
//         setMessage("OTP has been sent to your email!");
//       } else {
//         console.error("Error sending OTP");
//         alert("There was an error sending the OTP. Please try again.");
//         setMessage("Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Error during OTP sending:", error);
//       alert("There was an error sending the OTP. Please try again.");
//       setMessage("Failed to send OTP");
//     }
//   };

//   // Handle OTP verification
//   const verifyOtp = () => {
//     if (otp === generatedOtp) {
//       setIsVerified(true);
//       setMessage("OTP verified successfully. You can now reset your password.");
//     } else {
//       setMessage("Incorrect OTP. Please try again.");
//     }
//   };

//   // Handle password reset
//   const resetPassword = async () => {
//     if (!newPassword) {
//       alert("Please enter a new password.");
//       return;
//     }

//     try {
//       const url = `https://localhost:7011/api/User/${encodeURIComponent(userIdentifier)}/update-password?password=${encodeURIComponent(newPassword)}`;
//       const response = await axios.post(url);

//       if (response.status === 200) {
//         alert("Password reset successfully!");
//         setMessage("Password reset successfully!");
//       } else {
//         alert("Failed to reset password.");
//         setMessage("Failed to reset password.");
//       }
//     } catch (error) {
//       console.error("Error during password reset:", error);
//       alert("Failed to reset password. Please try again.");
//       setMessage("Failed to reset password.");
//     }
//   };

//   return (
//     <div className="mail">
//       <h1 className="mailTitle">Forgot Password</h1>
//       {message && <p>{message}</p>}
//       {!otpSent ? (
//         <>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Capture input value
//           />
//           <button onClick={sendOtpEmail}>Send OTP</button>
//         </>
//       ) : !isVerified ? (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)} // Capture OTP input value
//           />
//           <button onClick={verifyOtp}>Verify OTP</button>
//         </>
//       ) : (
//         <>
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)} // Capture new password input value
//           />
//           <button onClick={resetPassword}>Reset Password</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;


// import { useState } from "react";
// import axios from "axios"; // Make sure to import axios for API calls

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [generatedOtp, setGeneratedOtp] = useState(""); // Store the generated OTP
//   const [newPassword, setNewPassword] = useState("");
//   const [username, setUsername] = useState(""); // Store the username input
//   const [otpSent, setOtpSent] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isVerified, setIsVerified] = useState(false);

//   // Function to generate a random OTP
//   const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//   };

//   const sendOtpEmail = async () => {
//     if (!email) {
//       console.error("Email address is required");
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const otp = generateOtp(); // Generate OTP
//     setGeneratedOtp(otp); // Store the generated OTP
//     const bodyMessage = `Your OTP for password reset is: ${otp}`;
//     const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(email)}&body=${encodeURIComponent(bodyMessage)}`;

//     try {
//       const response = await fetch(url, {
//         method: 'POST', // Ensure you're using the correct method based on your backend
//       });

//       if (response.ok) {
//         console.log("OTP sent successfully");
//         alert("OTP has been sent to your email!");
//         setOtpSent(true);
//         setMessage("OTP has been sent to your email!");
//       } else {
//         console.error("Error sending OTP");
//         alert("There was an error sending the OTP. Please try again.");
//         setMessage("Failed to send OTP");
//       }
//     } catch (error) {
//       console.error("Error during OTP sending:", error);
//       alert("There was an error sending the OTP. Please try again.");
//       setMessage("Failed to send OTP");
//     }
//   };

//   // Handle OTP verification
//   const verifyOtp = () => {
//     if (otp === generatedOtp) {
//       setIsVerified(true);
//       setMessage("OTP verified successfully. You can now reset your password.");
//     } else {
//       setMessage("Incorrect OTP. Please try again.");
//     }
//   };

//   // Handle password reset
//   const resetPassword = async () => {
//     if (!newPassword || !username) {
//       alert("Please enter your username and a new password.");
//       return;
//     }

//     try {
//       const url = `https://localhost:7011/api/User/${encodeURIComponent(username)}/update-password?password=${encodeURIComponent(newPassword)}`;
//       const response = await axios.put(url);

//       if (response.status === 200) {
//         alert("Password reset successfully!");
//         setMessage("Password reset successfully!");
//       } else {
//         alert("Failed to reset password.");
//         setMessage("Failed to reset password.");
//       }
//     } catch (error) {
//       console.error("Error during password reset:", error);
//       alert("Failed to reset password. Please try again.");
//       setMessage("Failed to reset password.");
//     }
//   };

//   return (
//     <div className="mail">
//       <h1 className="mailTitle">Forgot Password</h1>
//       {message && <p>{message}</p>}
//       {!otpSent ? (
//         <>
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Capture input value
//           />
//           <button onClick={sendOtpEmail}>Send OTP</button>
//         </>
//       ) : !isVerified ? (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)} // Capture OTP input value
//           />
//           <button onClick={verifyOtp}>Verify OTP</button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)} // Capture username input value
//           />
//           <input
//             type="password"
//             placeholder="Enter new password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)} // Capture new password input value
//           />
//           <button onClick={resetPassword}>Reset Password</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default ForgotPassword;


import { useState } from "react";
import axios from "axios"; // Make sure to import axios for API calls
import './UpdatePass.css'; // Import the CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(""); // Store the generated OTP
  const [newPassword, setNewPassword] = useState("");
  const [username, setUsername] = useState(""); // Store the username input
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Function to generate a random OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
  };

  const sendOtpEmail = async () => {
    if (!email) {
      console.error("Email address is required");
      alert("Please enter a valid email address.");
      return;
    }

    const otp = generateOtp(); // Generate OTP
    setGeneratedOtp(otp); // Store the generated OTP
    const bodyMessage = `Your OTP for password reset is: ${otp}`;
    const url = `https://localhost:7011/api/Email?recipientEmail=${encodeURIComponent(email)}&body=${encodeURIComponent(bodyMessage)}`;

    try {
      const response = await fetch(url, {
        method: 'POST', // Ensure you're using the correct method based on your backend
      });

      if (response.ok) {
        console.log("OTP sent successfully");
        alert("OTP has been sent to your email!");
        setOtpSent(true);
        setMessage("OTP has been sent to your email!");
      } else {
        console.error("Error sending OTP");
        alert("There was an error sending the OTP. Please try again.");
        setMessage("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error during OTP sending:", error);
      alert("There was an error sending the OTP. Please try again.");
      setMessage("Failed to send OTP");
    }
  };

  // Handle OTP verification
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setIsVerified(true);
      setMessage("OTP verified successfully. You can now reset your password.");
    } else {
      setMessage("Incorrect OTP. Please try again.");
    }
  };

  // Handle password reset
  const resetPassword = async () => {
    if (!newPassword || !username) {
      alert("Please enter your username and a new password.");
      return;
    }

    try {
      const url = `https://localhost:7011/api/User/${encodeURIComponent(username)}/update-password?password=${encodeURIComponent(newPassword)}`;
      const response = await axios.put(url);

      if (response.status === 200) {
        alert("Password reset successfully!");
        setMessage("Password reset successfully!");
      } else {
        alert("Failed to reset password.");
        setMessage("Failed to reset password.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      alert("Failed to reset password. Please try again.");
      setMessage("Failed to reset password.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Forgot Password</h1>
      {message && <p className="message">{message}</p>}
      {!otpSent ? (
        <>
          <input
            type="email"
            className="input-field"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture input value
          />
          <button className="submit-button" onClick={sendOtpEmail}>Send OTP</button>
        </>
      ) : !isVerified ? (
        <>
          <input
            type="text"
            className="input-field"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)} // Capture OTP input value
          />
          <button className="submit-button" onClick={verifyOtp}>Verify OTP</button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="input-field"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Capture username input value
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)} // Capture new password input value
          />
          <button className="submit-button" onClick={resetPassword}>Reset Password</button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
