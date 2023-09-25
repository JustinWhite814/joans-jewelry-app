import React from 'react';
import './style.css'
function JewelCategory({ jewel }) {

  return (
    <>
    <figure key={jewel.id}>
       <img src={jewel.image} alt={jewel.title} />
       <figcaption>
        <h2 >{jewel.title}</h2>
        <h2 >${jewel.price}</h2>
        <h2 >{jewel.availability}</h2>
       </figcaption>
      
     </figure>
    </>

  );
}

export default JewelCategory;

