import React, { useState, useEffect } from 'react';
import JewelCategory from '../JewelsCategory';

function AllJewels() {
  const [jewels, setJewels] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // To keep track of the selected category

  async function fetchJewelsByCategory(category) {
    try {
      const res = await fetch(`http://localhost:3000/jewels/${category}`);
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
      {/* Create buttons for each category */}
      <button onClick={() => fetchJewelsByCategory('chains')}>Chains</button>
      <button onClick={() => fetchJewelsByCategory('bracelets')}>Bracelets</button>
      <button onClick={() => fetchJewelsByCategory('earrings')}>Earrings</button>
      <button onClick={() => fetchJewelsByCategory('rings')}>Rings</button>

      {/* Display selected category */}
      {selectedCategory && <h2>Selected Category: {selectedCategory}</h2>}

      {/* Render and categorize the fetched jewels */}
      {jewels.map((jewel) => (
        <JewelCategory key={jewel.id} jewel={jewel}/>
      ))}
    </>
  );
}

export default AllJewels;

