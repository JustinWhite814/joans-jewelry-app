import {Link}from 'react-router-dom';
import './style.css'
function JewelCategory({ jewel, setJewelDetails }) {

  return (
    <Link
      to={'/details'}
      onClick={() => {setJewelDetails(jewel)}}
    >
    <div className='card' key={jewel.id}>
       <img src={jewel.image} alt={jewel.title} />
        <h2>{jewel.title}</h2>
    </div>
    </Link>
  );
}

export default JewelCategory;

