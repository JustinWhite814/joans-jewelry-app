import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { getUpdatedJewel } from '../../../utils/backend'
import axios from 'axios'
export default function JewelDetails({jewel}) {

  return (
    <div>
        <img src={jewel.image} alt={jewel.title} />
        <h2>{jewel.title}</h2>
        <h2>{jewel.category}</h2>
        <h2>${jewel.price}</h2>
        <h2>{jewel.availability}</h2>
        <Link 
          to={`/edit/${jewel._id}`}>
          <button>Edit Form</button>
        </Link>
        
    </div>
  )
}
