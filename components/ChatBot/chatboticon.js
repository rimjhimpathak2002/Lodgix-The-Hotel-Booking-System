

// // src/components/ChatBot/ChatbotIcon.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './chatboticon.css'; // Create this CSS file for styling

// const ChatbotIcon = () => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/Chat'); // Change this to your actual Chat component route
//   };

//   return (
//     <div className="chatbot-icon" onClick={handleClick}>
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGmnxqjI5RgMRKsBBxEEgQiea-LJe3EZmjg&s" alt="Chatbot Icon" />
//       {/* You can adjust the path above to your actual image path */}
//     </div>
//   );
// };

// export default ChatbotIcon;

// src/components/ChatBot/ChatbotIcon.js
// import React, { useState } from 'react';
// import './chatboticon.css'; // Import your CSS for styling
// import Chatbox from './chatbot'; // Import the Chatbox component

// const ChatbotIcon = () => {
//     const [isChatVisible, setIsChatVisible] = useState(false);

//     const toggleChat = () => {
//         setIsChatVisible(!isChatVisible);
//     };
//     // ChatbotIcon.js



//     return (
//         <div>
//             <div className="chatbot-icon" onClick={toggleChat}>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGmnxqjI5RgMRKsBBxEEgQiea-LJe3EZmjg&s" alt="Chatbot" />
//             </div>
//             {isChatVisible && <Chatbox />} {/* Show the chatbox when clicked */}
//         </div>
//     );
// };

// export default ChatbotIcon;
// ChatbotIcon.js
import React, { useState } from 'react';
import './chatboticon.css'; // Ensure this file contains necessary styles

const ChatbotIcon = ({ onClick }) => {
    const [showHoverMessage, setShowHoverMessage] = useState(false);

    return (
        <div className="chatbot-icon">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGmnxqjI5RgMRKsBBxEEgQiea-LJe3EZmjg&s" 
                alt="Chatbot Icon" 
                onClick={onClick} // Attach onClick to the image for interaction
                className="chat-icon"
                onMouseEnter={() => setShowHoverMessage(true)} // Show message on mouse enter
                onMouseLeave={() => setShowHoverMessage(false)} // Hide message on mouse leave
            />
            {/* Hover Message */}
            {showHoverMessage && (
                <div className="hover-message">
                    Hey, I am Chiku! Use me for help.
                </div>
            )}
        </div>
    );
};

export default ChatbotIcon;

