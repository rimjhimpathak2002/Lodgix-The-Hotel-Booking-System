// import React from 'react';
// import Navbar from '../navbar/Navbar';
// import './Payment.css';
// const Payment = () => {
//   const googleFormURL = "https://forms.gle/gyT91E6jfKGG1g1B6"; // Replace with your Google Form URL

//   return ( 
//     <div><Navbar/>
//     <div style={styles.container}>
//       <h1 style={styles.title}>Payment</h1>
//       <p style={styles.description}>Please click the button below to make your payment.</p>
//       <a href={googleFormURL} target="_blank" rel="noopener noreferrer" style={styles.button}>
//         Go to Payment Form
//       </a>
//     </div>
//     </div>
//   );
// };


import React from 'react';
import Navbar from '../navbar/Navbar';
import './Payment.css'; // Import the CSS file

import Header from '../../components/header/Header';
const Payment = () => {
  const googleFormURL = "https://forms.gle/gyT91E6jfKGG1g1B6"; // Replace with your Google Form URL

  return (
    <div>
     <Navbar />
     <Header />
      <div className="container">
        <h1 className="title">Payment</h1>
        <p className="description">Please click the button below to make your payment.</p>
        <a href={googleFormURL} target="_blank" rel="noopener noreferrer" className="button">
          Go to Payment Form
        </a>
      </div>
    </div>
  );
};

export default Payment;
