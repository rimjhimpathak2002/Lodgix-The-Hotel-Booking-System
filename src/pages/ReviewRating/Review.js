// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Review.css';  // Importing the CSS file
// import Header from "../../components/header/Header";
// import Navbar from "../../components/navbar/Navbar";

// const ReviewAndRating = () => {
//   const [reviews, setReviews] = useState([]);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState(''); // Updated to 'comment' to match backend
//   const [submitted, setSubmitted] = useState(false);

//   const hotelId = 7; // Assuming the hotel ID is known or passed dynamically
//   const userId = 1; // Assuming the user ID is known or fetched from user authentication

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get('https://your-backend-url/api/reviews');
//         setReviews(response.data);
//       } catch (error) {
//         console.error('Error fetching reviews:', error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newFeedback = {
//       reviewId: null,  // Assuming the backend generates this
//       hotelId: hotelId,
//       userId: userId,
//       rating: rating,
//       comment: comment,  // Updated to match backend format
//       datePosted: new Date().toISOString()  // Generates current date in ISO format
//     };

//     try {
//       await axios.post('https://localhost:7011/api/Review/AddReview', newFeedback);
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <div className="review-section">
//         <h2>Customer Reviews & Ratings</h2>

//         {/* Display Reviews */}
//         {reviews.length > 0 ? (
//           <div>
//             {reviews.map((review, index) => (
//               <div key={index} className="review">
//                 <p>Rating: {review.rating} / 5</p>
//                 <p>Comment: {review.comment}</p> {/* Changed to 'comment' */}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No reviews available yet.</p>
//         )}

//         {/* Feedback Form */}
//         <h3>Leave your feedback</h3>

//         {!submitted ? (
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="rating">Rating (1 to 5):</label>
//               <input
//                 type="number"
//                 id="rating"
//                 min="1"
//                 max="5"
//                 value={rating}
//                 onChange={(e) => setRating(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="comment">Your Feedback:</label>
//               <textarea
//                 id="comment"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit" className="submitbtn">Submit</button>
//           </form>
//         ) : (
//           <p className="thank-you">Thank you for giving your feedback!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewAndRating;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css'; // Importing the CSS file
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const ReviewAndRating = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState(0); // To be provided by the user or set dynamically
  const [hotelId, setHotelId] = useState(0); // To be provided by the user
  const [userId, setUserId] = useState(0); // To be provided by the user
  const [rating, setRating] = useState(0); 
  const [comment, setComment] = useState(''); // User's comment
  const [datePosted, setDatePosted] = useState(new Date().toISOString()); // Automatically set to current date
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch existing reviews for the hotel
    const fetchReviews = async () => {
      try {
        const response = await axios.get('https://your-backend-url/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the review data according to the backend's expected format
    const newReview = {
      reviewId: reviewId,  // This can be set dynamically or given by the user
      hotelId: hotelId,    // This should be input by the user
      userId: userId,      // This should be input by the user
      rating: rating,
      comment: comment,
      datePosted: datePosted, // Automatically set to current date
    };

    try {
      await axios.post('https://localhost:7011/api/Review/AddReview', newReview);
      setSubmitted(true);
      // Optionally, you can reset the form here
      setReviewId(0);
      setHotelId(0);
      setUserId(0);
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <Header />
      <div className="review-section">
        <h2>Customer Reviews & Ratings</h2>

        {/* Display Reviews */}
        {reviews.length > 0 ? (
          <div>
            {reviews.map((review, index) => (
              <div key={index} className="review">
                <p>Rating: {review.rating} / 5</p>
                <p>Comment: {review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available yet.</p>
        )}

        {/* Feedback Form */}
        <h3>Leave your feedback</h3>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            {/* <div>
              <label htmlFor="reviewId">Review ID:</label>
              <input
                type="number"
                id="reviewId"
                value={reviewId}
                onChange={(e) => setReviewId(e.target.value)}
                required
              />
            </div> */}

            <div>
              <label htmlFor="hotelId">Hotel ID:</label>
              <input
                type="number"
                id="hotelId"
                value={hotelId}
                onChange={(e) => setHotelId(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="userId">User ID:</label>
              <input
                type="number"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="rating">Rating (1 to 5):</label>
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="comment">Your Feedback:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submitbtn">Submit</button>
          </form>
        ) : (
          <p className="thank-you">Thank you for giving your feedback!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewAndRating;

