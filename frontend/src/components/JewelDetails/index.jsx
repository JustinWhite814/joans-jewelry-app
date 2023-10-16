import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import { getUpdatedJewel } from '../../../utils/backend'
import axios from 'axios'
export default function JewelDetails(props) {
  // const {jewelId} = useParams()

//   async function getUpdatedJewel(jewelId){
//     const data = await axios.get(`http://localhost:3000/api/jewels/${jewelId}`)
//     console.log(data)
//     return data
// }

// getUpdatedJewel(jewelId)
//   useEffect(() => {
//     getUpdatedJewel(jewelId)
//         // .then((res) => res.json())
//         // .then((data)=> {
//         //   console.log('recieved data:' ,data)
//         //   props.setJewelDetails(data)
//         // })
// },[jewelId, props.setJewelDetails])
  return (
    <div>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <h2>{props.category}</h2>
        <h2>${props.price}</h2>
        <h2>{props.availability}</h2>
        <Link 
          to={`/edit/${props._id}`}>
          <button>Edit Form</button>
        </Link>
        
    </div>
  )
}
