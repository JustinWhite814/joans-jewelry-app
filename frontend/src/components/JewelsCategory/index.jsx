import React from 'react';

function JewelCategory({ jewel }) {
console.log(jewel.title)
  return (
    <div>
      {/* Render your jewels using the 'jewels' prop */}
      <ul>
        <li key={jewel.id}>{jewel.title}</li>
        {/* {jewels.map((jewel) => (
          <li key={jewel.id}>{jewel.title}</li>
        ))} */}
      </ul>
    </div>
  );
}

export default JewelCategory;

