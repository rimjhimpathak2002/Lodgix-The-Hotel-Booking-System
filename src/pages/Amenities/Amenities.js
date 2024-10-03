import React, { useEffect, useState } from 'react';
import './Amenities.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
const Amenities = () => {
    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const fetchAmenities = async () => {
            try {
                const response = await fetch('https://localhost:7011/api/Amenity/all');
                const data = await response.json();
                setAmenities(data);
            } catch (error) {
                console.error('Error fetching amenities:', error);
            }
        };

        fetchAmenities();
    }, []);

    return (
        <div><Navbar />
      <Header />
        <div className="amenities-container">
            {amenities.map((amenity, index) => (
                <div className="amenity-card" key={index}>
                    <h3>{amenity.name}</h3>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Amenities;

