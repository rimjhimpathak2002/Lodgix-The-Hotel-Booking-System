// // Login.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import './form.css'; // Import your CSS

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await axios.post("https://localhost:7011/api/User/Login", {
//                 username: email,
//                 password,
//             });
//             alert("Login successful");
//             console.log(response.data);
//             // Redirect user or handle login success (e.g., store token, navigate to dashboard, etc.)
//         } catch (error) {
//             console.error("Error logging in:", error);
//             alert("Login failed");
//         }
//     };

//     return (
//         <div className="form-wrapper">
//             <div className="form-container">
//                 <h2>Sign in or create an account</h2>
//                 <input
//                     type="username"
//                     placeholder="Enter your username"
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
//                 <button className="form-button" onClick={handleLogin}>Login</button>
//                 <div className="alternative-options">
//                     <span>or use one of these options</span>
//                     {/* Add options for social login if needed */}
//                 </div>
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

// export default Login;


// Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './form.css'; // Import your CSS
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
const Login = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const handleLogin = async () => {
        try {
            const response = await axios.post("https://localhost:7011/api/User/Login", {
                username,
                password,
            });
            alert("Login successful");
            // Assuming the response contains user data
            localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in local storage
            // Redirect to profile or dashboard
        //    window.location.href = '/Profile'; // or use history.push('/profile') if using react-router
        navigate('/Profile', { state: response.data });
    // navigate('/Navbar')
    //  navigate('/Booking');
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed");
        }
    };



    return (
       <div>
        <Navbar/>
        <div className="form-wrapper">
            <div className="form-container">
        
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    className="form-input"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="form-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="form-button" onClick={handleLogin}>Login</button>
               <div className='terms'>New User? <Link to="/register">Register Here</Link></div>
               <div className='terms'><Link to="/UpdatePass">Forget Password</Link></div>
            </div>
        </div>
     </div>
    );
};

export default Login;
