// src/Chat.js
import React, { useEffect, useState } from 'react';
import { ref, onValue, set, push } from 'firebase/database';
import database from './firebase';
import './chatbot.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [showHoverMessage, setShowHoverMessage] = useState(false); // State for hover message

    useEffect(() => {
        const messagesRef = ref(database, 'messages/');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messagesArray = data ? Object.values(data) : [];
            setMessages(messagesArray);
        });
    }, []);

    const handleUserMessage = (userMessage) => {
        let botResponse = '';
        // const faqlink = ""
        if (userMessage.includes('check-in')) {
            botResponse = "Our check-in time is 3 PM.";
        } else if (userMessage.includes('check-out')) {
            botResponse = "Check-out is at 11 AM.";
        } else if (userMessage.includes('hi') || userMessage.includes('hello')) {
            botResponse = "Hello, Welcome to Lodgix. How may I assist you?";
        } else if (userMessage.includes('book hotel')) {
            botResponse = 'You can check the reference document of booking on our website here.';
        } else {
            botResponse = `I'm sorry, I didn't understand that. You can refer to the FAQ section of our website. Thank you for visiting.`;
        }

        return botResponse;
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            const messagesRef = ref(database, 'messages/');
            const newMessageRef = push(messagesRef);

            // Set user message
            set(newMessageRef, {
                type: 'user',
                text: message,
                timestamp: new Date().toISOString()
            });

            // Generate and set bot response
            const botResponse = handleUserMessage(message);
            const botMessageRef = push(messagesRef);
            set(botMessageRef, {
                type: 'bot',
                text: botResponse,
                timestamp: new Date().toISOString()
            });

            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage} className="chat-form">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>

          
                
        </div>
    );
};

export default Chat;
