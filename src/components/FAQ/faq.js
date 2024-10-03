// src/Faq.js
import React, { useState } from 'react';
import './faq.css'; // Create a CSS file for styles
import Navbar from '../navbar/Navbar';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'How can I book a hotel room?',
            answer: 'To book a hotel room, simply navigate to our booking section, select your desired hotel, choose the dates, and follow the prompts to complete your reservation.'
        },
        {
            question: 'What payment methods are accepted?',
            answer: 'We accept various payment methods including credit cards, debit cards, and PayPal. You can select your preferred method during the booking process.'
        },
        {
            question: 'Can I cancel my booking?',
            answer: 'Yes, you can cancel your booking up to 24 hours before your check-in time without any penalty. Please refer to our cancellation policy for more details.'
        },
        {
            question: 'Is there a minimum stay requirement?',
            answer: 'Our minimum stay requirement varies by hotel. Most of our properties require a minimum stay of one night. Check the specific hotel details for more information.'
        },
        {
            question: 'Do you offer discounts for long stays?',
            answer: 'Yes, we offer special discounts for long stays. The discounts will be applied automatically during the booking process based on the number of nights you choose.'
        },
        {
            question: 'What if I have special requests for my stay?',
            answer: 'You can enter any special requests during the booking process, and we will do our best to accommodate them. You can also contact our customer service for specific inquiries.'
        },
        {
            question: 'How can I contact customer support?',
            answer: 'You can reach our customer support team via email at support@lodgix.com or call us at +1-800-555-0199. We are available 24/7 to assist you.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar/>
          
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <div 
                        className="faq-question" 
                        onClick={() => toggleFAQ(index)}
                    >
                        {faq.question}
                    </div>
                    {openIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
                
            ))}
        </div>
       
        </div>
    );
};

export default Faq;
