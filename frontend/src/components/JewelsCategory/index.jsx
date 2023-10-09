import React from 'react';
import './style.css'
function JewelCategory({ jewel }) {

  return (
    <>
    <div className='card' key={jewel.id}>
       <img src={jewel.image} alt={jewel.title} />
        <h2>{jewel.title}</h2>
        <h2>${jewel.price}</h2>
        <h2>{jewel.availability}</h2>
    </div>
    </>
  );
}

export default JewelCategory;

