import React from 'react'; // Ensure you import React correctly
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/home/Home'; // Adjust the import path based on your file structure
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Login from './components/Authentication/login';  // Adjust the path based on your project structure
import Register from './components/Authentication/register';  
import Profile from './components/Authentication/Profile';  
import Booking from './components/Booking/Booking';  
import About from "./pages/About/About";
import Amenities from "./pages/Amenities/Amenities"
import CancelBooking from "./components/Booking/CancelBooking";
import Review from './pages/ReviewRating/Review';
import Payment from './components/Payment/Payment';
import Room from './components/Rooms/Room';
import UpdatePass from './components/Authentication/UpdatePass';
import Chatbot from './components/ChatBot/chatbot';
import Faq from './components/FAQ/faq';
// import MainDashboard from './MainDashboard/MainDashboard';
function App() {
  
  return ( // Add return statement here
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* Ensure you're using self-closing tags for components */}
        
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Booking" element={<Booking/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Amenities" element={<Amenities/>} />
        <Route path="/CancelBooking" element={<CancelBooking/>} />
        <Route path="/Review" element={<Review/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/Room" element={<Room/>} />
        <Route path="/UpdatePass" element={<UpdatePass/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

