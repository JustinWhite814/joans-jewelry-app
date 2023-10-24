import {Link, useParams} from 'react-router-dom'
import './style.css'
export default function JewelDetails({jewel}) {

  return (
    <>
    <div className='jewelDetails'>
    <div>
        <img src={jewel.image} alt={jewel.title} />
        <h2>{jewel.title}</h2>
        <h2>{`${jewel.category.charAt(0).toUpperCase()}${jewel.category.slice(1)}`}</h2>
        <h2>${jewel.price}</h2>
        <h2>{jewel.availability}</h2>
        <Link 
          to={`/edit/${jewel._id}`}>
          <button>Edit Form</button>
        </Link>
       </div> 
    </div>
    </>
  )
}
