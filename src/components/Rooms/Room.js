// // src/components/AvailableRooms.js

// import React, { useEffect, useState } from 'react';
// import './Room.css'; // Import the CSS file for styling
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../navbar/Navbar';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// const AvailableRooms = () => {
//   const navigate = useNavigate();
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedRoom, setSelectedRoom] = useState(null); // State for selected room

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await fetch('https://localhost:7011/api/Room/AvailableRooms');
//         if (!response.ok) {
//           throw new Error('Failed to fetch rooms');
//         }
//         const data = await response.json();
//         setRooms(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRooms();
//   }, []);

//   const handleBookRoom = (roomId) => {
//     navigate('/Booking');
//   };

//   const openModal = (room) => {
//     setSelectedRoom(room); // Set the selected room for details
//   };

//   const closeModal = () => {
//     setSelectedRoom(null); // Close modal by setting selected room to null
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div><Navbar/>
//     <Header/>
  
//     <div className="available-rooms">
//       {/* <h2>Available Rooms</h2> */}
//       <div className="rooms-container">
//         {rooms.map((room) => (
//           room.available && (
//             <div key={room.roomId} className="room-card" onClick={() => openModal(room)}>
//               {room.imageURLs.length > 0 ? (
//                 <img src={room.imageURLs[0]} alt={`Room ${room.roomId}`} className="room-image" />
//               ) : (
//                 <img src="/path/to/placeholder-image.jpg" alt="Placeholder" className="room-image" />
//               )}
//               <h3>{room.roomType}</h3>
//               <p>Price per Night: ₹{room.pricePerNight}</p>
//               <p>Capacity: {room.capacity} persons</p>
//               <button className="Btn2" onClick={() => handleBookRoom(room.roomId)}>Book Now</button>
//             </div>
//           )
//         ))}
//       </div>

//       {/* Modal for displaying room details */}
//       {selectedRoom && (
//         <div className="modal" style={{ display: 'block' }}>
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <h3>{selectedRoom.roomType} Details</h3>
//             <img src={selectedRoom.imageURLs.length > 0 ? selectedRoom.imageURLs[0] : '/path/to/placeholder-image.jpg'} alt={`Room ${selectedRoom.roomId}`} className="room-image" />
//             <p>Price per Night: ₹{selectedRoom.pricePerNight}</p>
//             <p>Capacity: {selectedRoom.capacity} persons</p>
//             <p>Room Size: {selectedRoom.roomSize} sq ft</p>
//             <p>Room ID: {selectedRoom.roomId}</p>
//             <button className="book-now-button" onClick={() => handleBookRoom(selectedRoom.roomId)}>
//     Book Now
// </button>

//           </div>
//         </div>
        
//       )}
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default AvailableRooms;

import React, { useEffect, useState } from 'react';
import './Room.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const AvailableRooms = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null); // State for selected room
  const [searchTerm, setSearchTerm] = useState(''); // State for search bar input

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('https://localhost:7011/api/Room/AvailableRooms');
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleBookRoom = (roomId) => {
    navigate('/Booking');
  };

  const openModal = (room) => {
    setSelectedRoom(room); // Set the selected room for details
  };

  const closeModal = () => {
    setSelectedRoom(null); // Close modal by setting selected room to null
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term when input changes
  };

  const filteredRooms = rooms.filter((room) =>
    room.roomType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <Header />

      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for rooms"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <p className="suggestions">Best Deals: Deluxe Suite, Ocean View, Family Room</p>
      </div>

      <div className="available-rooms">
        <div className="rooms-container">
          {filteredRooms.map((room) => (
            room.available && (
              <div key={room.roomId} className="room-card" onClick={() => openModal(room)}>
                {room.imageURLs.length > 0 ? (
                  <img src={room.imageURLs[0]} alt={`Room ${room.roomId}`} className="room-image" />
                ) : (
                  <img src="/path/to/placeholder-image.jpg" alt="Placeholder" className="room-image" />
                )}
                <h3>{room.roomType}</h3>
                <p>Price per Night: ₹{room.pricePerNight}</p>
                <p>Capacity: {room.capacity} persons</p>
                <button className="Btn2" onClick={() => handleBookRoom(room.roomId)}>Book Now</button>
              </div>
            )
          ))}
        </div>

        {/* Modal for displaying room details */}
        {selectedRoom && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <h3>{selectedRoom.roomType} Details</h3>
              <img
                src={selectedRoom.imageURLs.length > 0 ? selectedRoom.imageURLs[0] : '/path/to/placeholder-image.jpg'}
                alt={`Room ${selectedRoom.roomId}`}
                className="room-image"
              />
              <p>Price per Night: ₹{selectedRoom.pricePerNight}</p>
              <p>Capacity: {selectedRoom.capacity} persons</p>
              <p>Room Size: {selectedRoom.roomSize} sq ft</p>
              <p>Room ID: {selectedRoom.roomId}</p>
              <button className="book-now-button" onClick={() => handleBookRoom(selectedRoom.roomId)}>Book Now</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AvailableRooms;
