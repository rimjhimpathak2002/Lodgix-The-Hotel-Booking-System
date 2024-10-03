// // Register.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import './form.css'; // Import your CSS

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [contactNumber, setContactNumber] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [dateOfBirth, setDateOfBirth] = useState('');

//     const handleRegister = async () => {
//         try {
//             const response = await axios.post("https://localhost:7011/api/User/Register", {
//                 username,
//                 firstName,
//                 lastName,
//                 contactNumber,
//                 email,
//                 password,
//                 dateofBirth: new Date(dateOfBirth).toISOString(), // Ensure date is in ISO format
//                 userType: 0, // Default user type
//             });
//             alert("Registration successful");
//             console.log(response.data);
//             // Handle registration success (e.g., redirect to login)
//         } catch (error) {
//             console.error("Error registering:", error);
//             alert("Registration failed");
//         }
      
//     };

//     return (
  
//         <div className="form-wrapper">
//             <div className="form-container">
          
//                 <h2>Sign in or create an account</h2>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     className="form-input"
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={firstName}
//                     className="form-input"
//                     onChange={(e) => setFirstName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={lastName}
//                     className="form-input"
//                     onChange={(e) => setLastName(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Contact Number"
//                     value={contactNumber}
//                     className="form-input"
//                     onChange={(e) => setContactNumber(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={email}
//                     className="form-input"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     className="form-input"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input
//                     type="date"
//                     placeholder="Date of Birth"
//                     value={dateOfBirth}
//                     className="form-input"
//                     onChange={(e) => setDateOfBirth(e.target.value)}
//                 />
//                 <button className="form-button" onClick={handleRegister}>Register</button>
//                 <div className="terms">
//                     <p>By signing in or creating an account, you agree with our <a href="#">Terms & conditions</a> and <a href="#">Privacy statement</a>.</p>
//                 </div>
//                 <div className="rights">
//                     <p>All rights reserved. Copyright (2006 - 2024) - Booking.com™</p>
//                 </div>
//             </div>
//         </div>
    
//     );
// };

// export default Register;





// Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './form.css'; // Import your CSS
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
const Register = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate



    //Email 
    

    const handleRegister = async () => {
        try {
            const response = await axios.post("https://localhost:7011/api/User/Register", {
                username,
                firstName,
                lastName,
                contactNumber,
                email,
                password,
                dateofBirth: new Date(dateOfBirth).toISOString(), // Ensure date is in ISO format
                userType: 0, // Default user type
            });
            alert("Registration successful");
            localStorage.setItem('userData', JSON.stringify(response.data)); // Store user data
            navigate('/Navbar')
            // navigate('/Profile', { state: response.data }); // Navigate to Profile
        } catch (error) {
            console.error("Error registering:", error);
            alert("Registration failed");
        }
    };

    return (
        <div><Navbar/>
        <div className="form-wrapper">
            <div className="form-container">
                <h2>Sign in or create an account</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    className="form-input"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    className="form-input"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    className="form-input"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Contact Number"
                    value={contactNumber}
                    className="form-input"
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    className="form-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="form-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    className="form-input"
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <button className="form-button" onClick={handleRegister}>Register</button>
               
                <div className="terms">
                Already a User? <Link to="/login">Login Here</Link>
                    <p>By signing in or creating an account, you agree with our <a href="#">Terms & conditions</a> and <a href="#">Privacy statement</a>.</p>
                </div>
                <div className="rights">
                    <p>All rights reserved. Copyright (2006 - 2024) - Booking.com™</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
