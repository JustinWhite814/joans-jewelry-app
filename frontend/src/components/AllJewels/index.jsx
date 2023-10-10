import React, { useState, useEffect } from 'react';
import JewelCategory from '../JewelsCategory';
import Navbar from '../Navbar';
import './style.css'
function AllJewels() {
  const [jewels, setJewels] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // To keep track of the selected category

  async function fetchJewelsByCategory(category) {
    try {
      const res = await fetch(`http://localhost:3000/api/jewels/${category}`);
      const data = await res.json();
      setJewels(data);
      setSelectedCategory(category); // Update the selected category in state
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  }

  useEffect(() => {
    // Fetch all jewels when the component initially loads
    fetchJewelsByCategory('chains'); // You can choose 'all' or another value for all jewels
  }, []);

  return (
    <>
      <Navbar selectedCategory={selectedCategory} fetchJewelsByCategory={fetchJewelsByCategory}/>

      {/* Render and categorize the fetched jewels */}
      <div className='container'>{jewels.map((jewel, index) => (
        <JewelCategory key={jewel.id || index} jewel={jewel}/>
      ))}
      </div>
    </>
  );
}

export default AllJewels;

