// // Profile.jsx
// import React from 'react';
// import './Profile.css'; // Import your CSS
// import Navbar from "../../components/navbar/Navbar"; // Adjust the import path as necessary
// import Header from "../../components/header/Header"; 
// const Profile = () => {
//     const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from local storage

//     if (!user) {
//         return <div>You need to log in to view this page.</div>;
//     }

//     return (
//         <div>
//             <Navbar /> 
//             <Header/>
//             <div className="profile-wrapper">
//                 <h2>Welcome to Lodgix {user.username}</h2>
//                 <div className="profile-details">
//                     <p><strong>Username:</strong> {user.username}</p>
//                     <p><strong>First Name:</strong> {user.firstName}</p>
//                     <p><strong>Last Name:</strong> {user.lastName}</p>
//                     <p><strong>Email:</strong> {user.email}</p>
//                     <p><strong>Contact Number:</strong> {user.contactNumber}</p>
//                     <p><strong>Date of Birth:</strong> {new Date(user.dateofBirth).toLocaleDateString()}</p>
//                     {/* Add more user details as necessary */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;

// Profile.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Profile.css'; // Import your CSS
// import Navbar from "../../components/navbar/Navbar"; // Adjust the import path as necessary
// import Header from "../../components/header/Header"; 
// const Profile = () => {
//     const location = useLocation();
//     const userData = location.state || JSON.parse(localStorage.getItem('userData'));

//     return (
//         <div> <Navbar /> 
//             <Header/>
//         <div className="profile-wrapper">
           
//             <h2>User Profile</h2>
//             {userData ? (
//                 <div className="profile-details">
//                     <p><strong>Username:</strong> {userData.username}</p>
//                     <p><strong>First Name:</strong> {userData.firstName}</p>
//                     <p><strong>Last Name:</strong> {userData.lastName}</p>
//                     <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
//                     <p><strong>Email:</strong> {userData.email}</p>
//                     <p><strong>Date of Birth:</strong> {new Date(userData.dateofBirth).toLocaleDateString()}</p>
//                 </div>
//             ) : (
//                 <p>No user data found. Please log in.</p>
//             )}
//         </div>
//         </div>
//     );
// };

// export default Profile;

// Profile.jsx
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './Profile.css'; // Import your CSS
// import Navbar from "../../components/navbar/Navbar"; // Adjust the import path as necessary
//  import Header from "../../components/header/Header"; 


// const Profile = () => {
//     const location = useLocation();
//     const userData = location.state || JSON.parse(localStorage.getItem('userData'));

//     return (
//         <div> <Navbar /> 
//              <Header/>
//         <div className="profile-wrapper">
//             <h2>Hii {userData.username}. Welcome to Lodgix</h2>
//             {userData ? (
//                 <div className="profile-details">
//                     <p><strong>Username:</strong> {userData.username}</p>
//                     <p><strong>First Name:</strong> {userData.firstName}</p>
//                     <p><strong>Last Name:</strong> {userData.lastName}</p>
//                     <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
//                     <p><strong>Email:</strong> {userData.email}</p>
//                     <p><strong>Date of Birth:</strong> {new Date(userData.dateofBirth).toLocaleDateString()}</p>
//                     <button className='headerBtn'>Update Profile</button>
//                 </div>
               
//             ) : (
//                 <p>No user data found. Please log in.</p>
//             )}
//         </div>
//         </div>
//     );
// };

// export default Profile;



// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import './Profile.css'; // Import your CSS
// import Navbar from "../../components/navbar/Navbar"; // Adjust the import path as necessary
// import Header from "../../components/header/Header"; 

// const Profile = () => {
//     const location = useLocation();
//     const [userData, setUserData] = useState(location.state || JSON.parse(localStorage.getItem('userData')));
//     const [updatedData, setUpdatedData] = useState({ ...userData }); // Clone userData for updates
//     const apiUrl = `https://localhost:7011/api/User/UpdateUserProfile/${userData.username}`; // Replace with your API URL

//     // Fetch user data on mount
//     useEffect(() => {
//         if (!userData) {
//             // Fetch data from API if userData is not available
//             const fetchUserData = async () => {
//                 try {
//                     const response = await axios.get(`${apiUrl}/GetUser/${userData.id}`); // Adjust according to your API
//                     setUserData(response.data);
//                     setUpdatedData(response.data); // Initialize updatedData
//                 } catch (error) {
//                     console.error("Error fetching user data:", error);
//                 }
//             };

//             fetchUserData();
//         }
//     }, [userData, apiUrl]);

//     // Handle profile update
//     const handleUpdateProfile = async () => {
//         try {
//             const response = await axios.put(`${apiUrl}/{username}`, updatedData); // Adjust according to your API
//             alert("Profile updated successfully");
//             setUserData(updatedData); // Update local state with new data
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             alert("Failed to update profile");
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <Header />
//             <div className="profile-wrapper">
//                 <h2>Hi {userData.username}. Welcome to Lodgix</h2>
//                 {userData ? (
//                     <div className="profile-details">
//                         <p><strong>Username:</strong> {userData.username}</p>
//                         <p><strong>First Name:</strong> {userData.firstName}</p>
//                         <p><strong>Last Name:</strong> {userData.lastName}</p>
//                         <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
//                         <p><strong>Email:</strong> {userData.email}</p>
//                         <p><strong>Date of Birth:</strong> {new Date(userData.dateofBirth).toLocaleDateString()}</p>
//                         <button className='headerBtn' onClick={handleUpdateProfile}>Update Profile</button>
//                     </div>
//                 ) : (
//                     <p>No user data found. Please log in.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css'; // Import your CSS
import Navbar from "../../components/navbar/Navbar"; // Adjust the import path as necessary
import Header from "../../components/header/Header"; 

const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the navigate function
    const userData = location.state || JSON.parse(localStorage.getItem('user'));

    // State for managing profile form data
    const [formData, setFormData] = useState({
        username: userData?.username || '',
        firstName: userData?.firstName || '',
        lastName: userData?.lastName || '',
        contactNumber: userData?.contactNumber || '',
        email: userData?.email || '',
        dateofBirth: userData?.dateofBirth || '',
    });
    const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate an API call
        console.log("Updated User Data: ", formData);
        // Optionally, you can save the updated data in localStorage
        localStorage.setItem('user', JSON.stringify(formData));
        setIsEditing(false); // Exit edit mode after saving
    };

    // Check if userData is available
    if (!userData) {
        alert("No user data found. Please log in.");
        navigate('/login'); // Redirect to the login page
        return null; // Prevent further rendering of the component
    }

    return (
        <div>
            <Navbar />
            <Header />
            <div className="profile-wrapper">
                <h2>Hii {userData.username}. Welcome to Lodgix</h2>
                <div className="profile-details">
                    {!isEditing ? (
                        <>
                            <p><strong>Username:</strong> {userData.username}</p>
                            <p><strong>First Name:</strong> {userData.firstName}</p>
                            <p><strong>Last Name:</strong> {userData.lastName}</p>
                            <p><strong>Contact Number:</strong> {userData.contactNumber}</p>
                            <p><strong>Email:</strong> {userData.email}</p>
                            <p>
                                <strong>Date of Birth:</strong> 
                                {userData.dateofBirth ? new Date(userData.dateofBirth).toLocaleDateString() : 'N/A'}
                            </p>
                            <button className='headerBtn' onClick={() => setIsEditing(true)}>Update Profile</button>
                        </>
                    ) : (
                        <form onSubmit={handleSubmit} className="profile-form">
                            <label>
                                Username:
                                <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                            </label>
                            <label>
                                First Name:
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Contact Number:
                                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                            </label>
                            <label>
                                Date of Birth:
                                <input type="date" name="dateofBirth" value={formData.dateofBirth ? formData.dateofBirth.split('T')[0] : ''} onChange={handleInputChange} required />
                            </label>
                            <button type="submit" className='headerBtn'>Save Changes</button>
                            <button type="button" className='headerBtn' onClick={() => setIsEditing(false)}>Cancel</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
