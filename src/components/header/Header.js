// import "./Header.css";
// import {faBed, faCalendar, faCalendarDays, faCar, faCoffe, faHotel, faPerson, faTaxi} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { useState } from "react";
// //  import {DateRange} from 'react-date-range'; 
// // import {useNavigate} from 'react-router-dom';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { format } from 'date-fns';
// import axios from 'axios';

// const Header=() => 
// {
//    // const[date,setDate]=useState([
//    //    {
//    //       startDate:new Date(),
//    //       endDate:null,
//    //       key:"selection",
//    //    },
//    // ]);
//    // const [destination, setDestination] = useState("");
//    // const [openDate, setOpenDate] = useState(false);
//    // const [date, setDate] = useState([
//    //   {
//    //     startDate: new Date(),
//    //     endDate: new Date(),
//    //     key: "selection",
//    //   },
//    // ]);
//    const[openOptions, setOpenOptions] = useState(false);
//    const[options, setOptions] = useState(
//       {
//          adult:1,
//          children:0,
//          room:1,
//       }
//    );
//    const handleOption = (name, operation) => {
//       setOptions((prev) => {
//         return {
//           ...prev,
//           [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//         };
//       });
//     };
//    // Get the navigate function
//    //const navigate = useNavigate(); 
 
//    const hotelData = [
//       { id: 1, name: 'Ocean View Hotel', city: 'Miami' },
//       { id: 2, name: 'Mountain Retreat', city: 'Denver' },
//       { id: 3, name: 'City Lights Inn', city: 'New York' },
//       { id: 4, name: 'Sunny Beach Resort', city: 'Miami' },
//       { id: 5, name: 'Historic Hotel', city: 'Philadelphia' },
//   ]; 
//   const [location, setLocation] = useState(''); // State for user input
//   const [filteredHotels, setFilteredHotels] = useState([]); // State for filtered hotels

//   const handleSearch = () => {
//       if (!location) {
//           setFilteredHotels([]); // Clear results if input is empty
//           return;
//       }

//       // Filter hotels based on the entered city
//       const results = hotelData.filter(hotel =>
//           hotel.city.toLowerCase() === location.toLowerCase()
//       );
//       setFilteredHotels(results); // Update state with filtered results
//   };  



// // const HeaderSearch = () => {
// //    const [location, setLocation] = useState('');
// //    const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });
// //    const [date, setDate] = useState([{ startDate: new Date(), endDate: new Date() }]);
// //    const [availableRooms, setAvailableRooms] = useState([]);

// //    // Function to build the generic API URL
// //    const buildAvailabilityUrl = (roomId, checkInDate, checkOutDate) => {
// //        const baseUrl = 'https://localhost:7011/api/Booking/CheckAvailability';
// //        const queryParams = new URLSearchParams({
// //            roomId: roomId,
// //            checkInDate: encodeURIComponent(checkInDate),
// //            checkOutDate: encodeURIComponent(checkOutDate)
// //        });
// //        return `${baseUrl}?${queryParams.toString()}`;
// //    };

// //    const handleSearch = async () => {
// //        try {
// //            // Dynamic values from the state or inputs
// //            const roomId = options.room;  // You can use a selected room ID
// //            const checkInDate = date[0].startDate.toISOString(); // Convert to ISO format
// //            const checkOutDate = date[0].endDate.toISOString();  // Convert to ISO format

// //            // Construct the dynamic API URL
// //            const apiUrl = buildAvailabilityUrl(roomId, checkInDate, checkOutDate);

// //            // Call the API
// //            const response = await axios.get(apiUrl);
// //            setAvailableRooms(response.data); // Assuming the response contains available rooms
// //        } catch (error) {
// //            console.error("Error fetching room availability:", error);
// //        }
// //    };
// //    const handleBookRoom = (roomId) => {
// //       // Logic for booking the room
// //       console.log(`Booking room with ID: ${roomId}`);
// //   };
//     return(
//        <div className="header">
//          <div className="headerContainer">
//           <div className="headerList">
//           <div className="headerListItem active">
//           <FontAwesomeIcon icon={faBed} /> 
//           <span>Stays</span>
//           </div>
//           <div className="headerListItem active">
//           <FontAwesomeIcon icon={faHotel} /> 
//           <span>Hotes</span>
//           </div>
//           <div className="headerListItem active">
//           <FontAwesomeIcon icon={faCar} /> 
//           <span>Car Rental</span>
//           </div>
//           <div className="headerListItem active">
//           <FontAwesomeIcon icon={faBed} /> 
//           <span>Places to visit</span>
//           </div>
//           <div className="headerListItem active">
//           <FontAwesomeIcon icon={faTaxi} /> 
//           <span>Airport Taxi</span>
//           </div>
//           </div>

//           {
//             <>
//             <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
//           <p className="headerDesc">Get rewarder for your travels</p>
//           <button className="headerBtn">Sign in / Register</button>
          
//           <div className="headerSearch">
//             <div className="headerSearchItem">
//                <FontAwesomeIcon icon={faBed} classname="headerIcon"/>
//                {/* <input type="text" placeholder="where are you going ?" className="headerSearchInput"/> */}
//                <input
//                         type="text"
//                         placeholder="Where are you going?"
//                         className="headerSearchInput"
//                         value={location} // Controlled input
//                         onChange={(e) => setLocation(e.target.value)} // Update state on change
//                     />
//             </div>
          

          
//              <div className="headerSearchItem">
//                <FontAwesomeIcon icon={faCalendarDays} classname="headerIcon"/>
//                {/* <input type="text" placeholder="where are you going ?" className="headerSearchInput"/> */}
//              <span className="headerSearchText">date to date</span> 
//             {/* <DateRange
//                     editableDateInputs = {true}
//                     onChange={(item)=>setDate([item.selection])}
//                     moveRangeOnFirstselection={false}
//                     ranges={date}
//             /> */}
 
          
//           </div>
           
       
       
//             <div className="headerSearchItem">
//                <FontAwesomeIcon icon={faPerson} classname="headerIcon"/>
//                <span onClick={()=>setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adult} adult . ${options.children} children .${options.room} room`}</span>
//                {/* <input type="text" placeholder="where are you going ?" className="headerSearchInput"/> */}
//             {openOptions && (<div className = "options">
//             <div className="optionItem">
//                <span className="optionText">Adult</span>
//                <div className="optionCounter">
//                <button disabled = {options.adult<=1} className="optionCounterButton" onClick={() => handleOption("adult", "d")} >-</button>
//                <span className="optionCounterNumber">{options.adult}</span>
//                <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
//                </div>
//             </div>
//             <div className="optionItem">
//                <span className="optionText">Children</span>
//                <div className="optionCounter">
//                <button disabled = {options.children<=0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
//                <span className="optionCounterNumber">{options.children}</span>
//                <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
//                </div>
//             </div>
//             <div className="optionItem">
//                <span className="optionText">Room</span>
//                <div className="optionCounter">
//                <button disabled = {options.room<=1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
//                <span className="optionCounterNumber">{options.room}</span>
//                <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
//                </div>
//             </div>
//             </div>
//             )}
//             </div>
         

//             <div className="headerSearchItem">
//               <button className="headerBtn" onClick={handleSearch}>Search</button>
//               {filteredHotels.length > 0 ? (
//                 <ul>
//                     {filteredHotels.map(hotel => (
//                         <li key={hotel.id}>{hotel.name} - {hotel.city}</li> // Display results
//                     ))}
//                 </ul>
//             ) : (
//                 location && <p>No hotels found in {location}</p> // Message if no results
//             )}
            

//             {/* Table for Displaying Available Rooms */}
//             {/* {availableRooms.length > 0 && (
//                 <div className="roomResults">
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Room Type</th>
//                                 <th>Price</th>
//                                 <th>Availability</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {availableRooms.map(room => (
//                                 <tr key={room.id}>
//                                     <td>{room.roomType}</td>
//                                     <td>{room.price}</td>
//                                     <td>{room.isAvailable ? 'Available' : 'Unavailable'}</td>
//                                     <td>
//                                         <button
//                                             onClick={() => handleBookRoom(room.id)}
//                                             disabled={!room.isAvailable}
//                                         >
//                                             Book Now
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )} */}
//             </div>
//         </div></>}
//        </div>
//        </div>
//     );
// }

// export default Header;


// import "./Header.css";
// import { faBed, faCalendar, faCalendarDays, faCar, faCoffe, faHotel, faPerson, faTaxi } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import axios from 'axios';


// const Header = () => {
//     const navigate = new useNavigate();
//     const [openOptions, setOpenOptions] = useState(false);
//     const [options, setOptions] = useState({
//         adult: 1,
//         children: 0,
//         room: 1,
//     });
    
//     const handleOption = (name, operation) => {
//         setOptions((prev) => ({
//             ...prev,
//             [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//         }));
//     };
    
//     // const handleBookNow = (hotelId) => {
//     //     // Logic to handle booking for the selected hotel
//     //     console.log(`Booking hotel with ID: ${hotelId}`);
//     //     // You can navigate to a booking page or open a modal, etc.
//     // };
    
//         const hotelData = [
//             { id: 1, name: 'Taj Mahal Palace', city: 'Mumbai' },
//             { id: 2, name: 'Oberoi Udaivilas', city: 'Udaipur' },
//             { id: 3, name: 'Leela Palace', city: 'Bengaluru' },
//             { id: 4, name: 'ITC Grand Chola', city: 'Chennai' },
//             { id: 5, name: 'The Oberoi', city: 'New Delhi' },
//             { id: 6, name: 'The Lalit', city: 'Kolkata' },
//             { id: 7, name: 'Hyatt Regency', city: 'Ahmedabad' },
//             { id: 8, name: 'JW Marriott', city: 'Pune' },
//             { id: 9, name: 'The Westin', city: 'Gurgaon' },
//             { id: 10, name: 'Radisson Blu', city: 'Hyderabad' },
//             { id: 11, name: 'Taj Mahal Palace', city: 'Mumbai' },
//             { id: 12, name: 'Oberoi Udaivilas', city: 'Udaipur' },
//             { id: 13, name: 'Leela Palace', city: 'Bengaluru' },
//             { id: 14, name: 'ITC Grand Chola', city: 'Chennai' },
//             { id: 15, name: 'The Oberoi', city: 'New Delhi' },
//             { id: 16, name: 'The Lalit', city: 'Kolkata' },
//             { id: 17, name: 'Hyatt Regency', city: 'Ahmedabad' },
//             { id: 18, name: 'JW Marriott', city: 'Pune' },
//             { id: 19, name: 'The Westin', city: 'Gurgaon' },
//             { id: 20, name: 'Radisson Blu', city: 'Hyderabad' },
//             { id: 21, name: 'The Taj', city: 'Agra' },
//             { id: 22, name: 'Novotel', city: 'Visakhapatnam' },
//             { id: 23, name: 'The Park', city: 'Chennai' },
//             { id: 24, name: 'Holiday Inn', city: 'Mumbai' },
//             { id: 25, name: 'ITC Maurya', city: 'New Delhi' },
//             { id: 26, name: 'Trident', city: 'Gurgaon' },
//             { id: 27, name: 'The Leela', city: 'Bengaluru' },
//             { id: 28, name: 'Radisson', city: 'Varanasi' },
//             { id: 29, name: 'Lemon Tree', city: 'Nashik' },
//             { id: 30, name: 'Fortune Park', city: 'Coimbatore' },
//             { id: 31, name: 'Hotel Royal Orchid', city: 'Bengaluru' },
//             { id: 32, name: 'Hyatt', city: 'Puducherry' },
//             { id: 33, name: 'Sheraton', city: 'Noida' },
//             { id: 34, name: 'Marriott', city: 'Jaipur' },
//             { id: 35, name: 'Crowne Plaza', city: 'Kochi' },
//             { id: 36, name: 'Radisson Blu', city: 'Kolkata' },
//             { id: 37, name: 'The Ashok', city: 'New Delhi' },
//             { id: 38, name: 'VITS', city: 'Mumbai' },
//             { id: 39, name: 'Ginger Hotel', city: 'Navi Mumbai' },
//             { id: 40, name: 'Taj Exotica', city: 'Goa' },
//             { id: 41, name: 'Grand Hyatt', city: 'Mumbai' },
//             { id: 42, name: 'The Leela', city: 'Goa' },
//             { id: 43, name: 'Vivanta', city: 'Surat' },
//             { id: 44, name: 'The St. Regis', city: 'Mumbai' },
//             { id: 45, name: 'The Lalit', city: 'Bhopal' },
//             { id: 46, name: 'Radisson', city: 'Ahmedabad' },
//             { id: 47, name: 'Hotel Mirage', city: 'Agra' },
//             { id: 48, name: 'Alila Diwa', city: 'Goa' },
//             { id: 49, name: 'Ramada', city: 'Ajmer' },
//             { id: 50, name: 'The Oberoi Cecil', city: 'Shimla' },
//         ];
        
    

//     const [location, setLocation] = useState(''); // State for user input
//     const [filteredHotels, setFilteredHotels] = useState([]); // State for filtered hotels

//     const handleSearch = () => {
//         if (!location) {
//             setFilteredHotels([]); // Clear results if input is empty
//             return;
//         }

//         // Filter hotels based on the entered city
//         const results = hotelData.filter(hotel =>
//             hotel.city.toLowerCase() === location.toLowerCase()
//         );
//         setFilteredHotels(results); // Update state with filtered results
//     };

//     return (
//         <div className="header">
//             <div className="headerContainer">
//                 <div className="headerList">
//                     <div className="headerListItem active">
//                         <FontAwesomeIcon icon={faBed} />
//                         <span>Stays</span>
//                     </div>
//                     <div className="headerListItem active">
//                         <FontAwesomeIcon icon={faHotel} />
//                         <span>Hotels</span>
//                     </div>
//                     <div className="headerListItem active">
//                         <FontAwesomeIcon icon={faCar} />
//                         <span>Car Rental</span>
//                     </div>
//                     <div className="headerListItem active">
//                         <FontAwesomeIcon icon={faBed} />
//                         <span>Places to Visit</span>
//                     </div>
//                     <div className="headerListItem active">
//                         <FontAwesomeIcon icon={faTaxi} />
//                         <span>Airport Taxi</span>
//                     </div>
//                 </div>

//                 <>
//                     <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
//                     <p className="headerDesc">Get rewarded for your travels</p>
//                     <button className="headerBtn">Sign in / Register</button>

//                     <div className="headerSearch">
//                         {/* Location Input */}
//                         <div className="headerSearchItem">
//                             <FontAwesomeIcon icon={faBed} className="headerIcon" />
//                             <input
//                                 type="text"
//                                 placeholder="Where are you going?"
//                                 className="headerSearchInput"
//                                 value={location}
//                                 onChange={(e) => setLocation(e.target.value)}
//                             />
//                         </div>

//                         {/* Date Picker Placeholder */}
//                         {/* <div className="headerSearchItem">
//                             <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
//                             <span className="headerSearchText">Date to date</span> */}
//                             {/* Uncomment and implement DateRange if needed */}
//                             {/* <DateRange
//                                 editableDateInputs={true}
//                                 onChange={(item) => setDate([item.selection])}
//                                 moveRangeOnFirstSelection={false}
//                                 ranges={date}
//                             /> */}
//                         {/* </div> */}

//                         {/* Options for Adults, Children, and Rooms */}
//                         <div className="headerSearchItem">
//                             <FontAwesomeIcon icon={faPerson} className="headerIcon" />
//                             <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
//                                 {`${options.adult} adult . ${options.children} children . ${options.room} room`}
//                             </span>
//                             {openOptions && (
//                                 <div className="options">
//                                     <div className="optionItem">
//                                         <span className="optionText">Adult</span>
//                                         <div className="optionCounter">
//                                             <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
//                                             <span className="optionCounterNumber">{options.adult}</span>
//                                             <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
//                                         </div>
//                                     </div>
//                                     <div className="optionItem">
//                                         <span className="optionText">Children</span>
//                                         <div className="optionCounter">
//                                             <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
//                                             <span className="optionCounterNumber">{options.children}</span>
//                                             <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
//                                         </div>
//                                     </div>
//                                     <div className="optionItem">
//                                         <span className="optionText">Room</span>
//                                         <div className="optionCounter">
//                                             <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
//                                             <span className="optionCounterNumber">{options.room}</span>
//                                             <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Search Button */}
//                         <div className="headerSearchItem">
//                             <button className="headerBtn" onClick={handleSearch}>Search</button>
//                         </div>
//                     </div>

//                     {/* Displaying Search Results Below the Search Bar
//                     {filteredHotels.length > 0 ? (
//                         <table className="hotelTable">
//                             <thead>
//                                 <tr>
//                                     <th>Hotel Name</th>
//                                     <th>City</th>
                                  
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredHotels.map(hotel => (
//                                     <tr key={hotel.id}>
//                                         <td>{hotel.name}</td>
//                                         <td>{hotel.city}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     ) : (
//                         location && <p>No hotels found in {location}</p>
//                     )} */}
//                     {/* Displaying Search Results Below the Search Bar */}
// {filteredHotels.length > 0 ? (
//     <table className="hotelTable">
//         <thead>
//             <tr>
//                 <th>Hotel Name</th>
//                 <th>City</th>
//                 <th>Action</th> {/* New column for the action button */}
//             </tr>
//         </thead>
//         <tbody>
//             {filteredHotels.map(hotel => (
//                 <tr key={hotel.id}>
//                     <td>{hotel.name}</td>
//                     <td>{hotel.city}</td>
//                     <td>
//                     <button
//     className="bookNowBtn"
//     onClick={() => {
//         // Check if the user is logged in
//         const user = localStorage.getItem('user');
//         if (user) {
//             // If logged in, navigate to the booking form
//             navigate('/booking');
//         } else {
//             // If not logged in, display an alert or a message
//             alert('You must be logged in or register before making a booking.');
//         }
//     }}
// >
//     Book Now
// </button>
//                     </td>
//                 </tr>
//             ))}
//         </tbody>
//     </table>
// ) : (
//     location && <p>No hotels found in {location}</p>
// )}

//                 </>
//             </div>
//         </div>
//     );
// }

// export default Header;


import "./Header.css";
import { faBed, faPerson, faHotel, faCar, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Header = () => {
    const navigate = new useNavigate();
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    
    const [location, setLocation] = useState(''); // State for user input
    const [filteredHotels, setFilteredHotels] = useState([]); // State for filtered hotels
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const handleOption = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        }));
    };

    const handleSearch = async () => {
        if (!location) {
            setFilteredHotels([]); // Clear results if input is empty
            return;
        }

        setLoading(true); // Show loading while fetching data
        setError(null); // Clear previous errors

        try {
            // Replace with your actual API endpoint
            const response = await axios.get(`https://localhost:7011/api/Hotel/GetHotelsByLocation?location=${location}`);
            setFilteredHotels(response.data); // Set the hotels returned from the API
        } catch (err) {
            setError('Error fetching hotels. Please try again later.');
        } finally {
            setLoading(false); // Hide loading when data is fetched
        }
    };

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Hotels</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rental</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Places to Visit</span>
                    </div>
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>

                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels</p>
                <button className="headerBtn">Sign in / Register</button>

                <div className="headerSearch">
                    {/* Location Input */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            className="headerSearchInput"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Options for Adults, Children, and Rooms */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                            {`${options.adult} adult . ${options.children} children . ${options.room} room`}
                        </span>
                        {openOptions && (
                            <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() => handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.adult}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={options.children <= 0} className="optionCounterButton" onClick={() => handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.children}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={options.room <= 1} className="optionCounterButton" onClick={() => handleOption("room", "d")}>-</button>
                                        <span className="optionCounterNumber">{options.room}</span>
                                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search Button */}
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>

                {/* Displaying Search Results */}
                {loading && <p>Loading hotels...</p>}
                {error && <p>{error}</p>}
                {filteredHotels.length > 0 ? (
                    <table className="hotelTable">
                        <thead>
                            <tr>
                                <th>Hotel Name</th>
                                <th>City</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredHotels.map(hotel => (
                                <tr key={hotel.id}>
                                    <td>{hotel.name}</td>
                                    <td>{hotel.city}</td>
                                    <td>
                                        <button
                                            className="bookNowBtn"
                                            onClick={() => {
                                                const user = localStorage.getItem('user');
                                                if (user) {
                                                    navigate('/Room');
                                                } else {
                                                    alert('You must be logged in or register before making a booking.');
                                                }
                                            }}
                                        >
                                            Book Now
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    location && !loading && <p>No hotels found in {location}</p>
                )}
            </div>
        </div>
    );
};

export default Header;
