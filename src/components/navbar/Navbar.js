// import "./Navbar.css";
// import { Link } from "react-router-dom"; 
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const navigate = new useNavigate();
//     const user = JSON.parse(localStorage.getItem('user'));
//     const handleLogout = () => {
//         localStorage.removeItem('userData'); // Clear user data from local storage
//         alert("Logged out successfully"); // Optionally show a message
//         navigate('/login'); // Redirect to login page
//     };
//     return (
  
//         <div className="navbar"> {/* Use className instead of classname */}
//             <div className="navcontainer"> {/* Use className instead of class */}
//                 <span className="logo">Lodgix</span>
//                 <div className="navitems">
//                     {/* <button className="navButton">Register</button>
//                     <button className="navButton">Login</button> */}
//                     <Link to="/About">
//                         <button className="navButton">About Lodgix</button>
//                     </Link>
//                      <Link to="/register">
//                         <button className="navButton">Register</button>
//                     </Link>
//                     <Link to="/login">
//                         <button className="navButton">Login</button>
//                     </Link>
//                     <Link to="/profile">
//                         <button className="navButton">View Profile</button>
//                     </Link>
//                     <Link to="/Booking">
//                         <button className="navButton">Book Hotel</button>
//                     </Link>
                    
//                     <Link to="/CancelBooking">
//                         <button className="navButton">Cancel Booking</button>
//                     </Link>
//                     <button className="navButton" onClick={handleLogout}>Logout</button>
                    
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import CancelBooking from "../../components/Booking/CancelBooking"; // Import the modal component

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from local storage
    alert("Logged out successfully"); // Optionally show a message
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <div className="navcontainer">
        <a href="./" className="logo">Lodgix</a>
        <div className="navitems">
          <Link to="/About">
            <button className="navButton">About Lodgix</button>
          </Link>
          <Link to="/hotels">
            <button className="navButton">Feedback</button>
          </Link>
          <Link to="/register">
            <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link>
          <Link to="/profile">
            <button className="navButton">View Profile</button>
          </Link>
         
          <Link to="/faq">
            <button className="navButton">FAQ</button>
          </Link>
          {/* <Link to="/Booking">
            <button className="navButton">Book Hotel</button>
          </Link> */}
          <Link to="/Payment">
            <button className="navButton">Payment</button>
          </Link>
          {/* <Link to="/Room">
            <button className="navButton">View Rooms</button>
          </Link> */}
          {/* Open the modal instead of navigating */}
          <button className="navButton" onClick={() => setIsModalOpen(true)}>Cancel Booking</button>
          {/* <button className="navButton" onClick={() => setIsModalOpen(true)}>Payment</button> */}
          <button className="navButton" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      
      {/* Render the Cancel Booking Modal */}
      <CancelBooking isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Navbar;
















// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import CancelBooking from "../../components/Booking/CancelBooking"; // Import the modal component
// import "./Navbar.css"; // Import the updated CSS

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle vertical menu

//   const handleLogout = () => {
//     localStorage.removeItem('userData');
//     alert("Logged out successfully");
//     navigate('/login');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle vertical nav
//   };

//   return (
//     <div className="navbar">
//       <div className="navcontainer">
//         <a href="./" className="logo">Lodgix</a>

//         {/* Horizontal navigation for Login and Register */}
//         <div className="horizontal-nav">
//           <Link to="/login">
//             <button className="navButton">Login</button>
//           </Link>
//           <Link to="/register">
//             <button className="navButton">Register</button>
//           </Link>
//         </div>

//         {/* Hamburger icon */}
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>

//         {/* Vertical navigation for other functionalities */}
//         <div className={`vertical-nav ${isMenuOpen ? 'open' : ''}`}>
//           <Link to="/About">
//             <button className="navButton">About Lodgix</button>
//           </Link>
//           <Link to="/hotels">
//             <button className="navButton">Feedback</button>
//           </Link>
//           <Link to="/profile">
//             <button className="navButton">View Profile</button>
//           </Link>
//           <Link to="/Booking">
//             <button className="navButton">Book Hotel</button>
//           </Link>
//           <Link to="/Payment">
//             <button className="navButton">Payment</button>
//           </Link>
//           <button className="navButton" onClick={() => setIsModalOpen(true)}>Cancel Booking</button>
//           <button className="navButton" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>

//       {/* Render the Cancel Booking Modal */}
//       <CancelBooking isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default Navbar;
