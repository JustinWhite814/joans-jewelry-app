import React from 'react';
import './style.css'
export default function Navbar({fetchJewelsByCategory, selectedCategory}) {

  return (
    <>
    <div className='nav'>
        {/* Create buttons for each category */}
        <button onClick={() => fetchJewelsByCategory('chains')}>Chains</button>
        <button onClick={() => fetchJewelsByCategory('bracelets')}>Bracelets</button>
        <button onClick={() => fetchJewelsByCategory('earrings')}>Earrings</button>
        <button onClick={() => fetchJewelsByCategory('rings')}>Rings</button>

        {/* Display selected category */}
        {selectedCategory && <h2>Selected Category: {selectedCategory}</h2>}
    </div>
    </>
  )
}



