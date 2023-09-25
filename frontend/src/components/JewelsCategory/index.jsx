import React from 'react';

function JewelCategory({ jewel }) {

  return (
    <>
    <div key={jewel.id}>
       <img src={jewel.image} alt={jewel.title} />
        <h2>{jewel.title}</h2>
        <h2>${jewel.price}</h2>
        <h2>{jewel.availability}</h2>
    </div>
    </>
  );
}

export default JewelCategory;

