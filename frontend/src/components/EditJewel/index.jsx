import {useState, useEffect} from 'react'
import { updateJewels, deleteJewels, getUpdatedJewel } from '../../../utils/backend'
import { useNavigate,useParams } from 'react-router-dom'
import './style.css'
export default function EditJewel({jewel, setJewelDetails}) {
    // console.log(jewel)
    const navigate = useNavigate()
    const id = useParams()
    const [editJewelData, setEditJewelData] = useState({
        image: jewel.image,
        title: jewel.title,
        price: jewel.price,
        category: jewel.category,
        availability: jewel.availability
        
    })

    
  function handleInputChange(event){
    setEditJewelData({
        ...editJewelData,
        [event.target.name]: event.target.value,
    })
  }  
  
  function handleSubmit(e){
    e.preventDefault()
    updateJewels(editJewelData, jewel._id)
       .then(() => {
           getUpdatedJewel(jewel._id)
            .then((updatedJewel) => 
                {
                setJewelDetails(updatedJewel)
                navigate(`/details/${jewel._id}`)
                })    
    })
  }

  function handleDelete(e){
    e.preventDefault()
    deleteJewels(jewel._id)
        .then(() => navigate('/'))
  }


  return (
    <>
    <div className="formContainer">
        <form onSubmit={handleSubmit}>
            <input
                name="image"
                className=""
                placeholder="img url"
                value={editJewelData.image}
                onChange={handleInputChange}
            />
            <input
                name="title"
                className=""
                placeholder="title"
                value={editJewelData.title}
                onChange={handleInputChange}
            />
            <br />
            <input
                name="price"
                className=""
                placeholder="price"
                value={editJewelData.price}
                onChange={handleInputChange}
            />
            <input
                name="category"
                className=""
                placeholder=""
                value={editJewelData.category}
                onChange={handleInputChange}
            />
            <input
                name="availability"
                className=""
                placeholder=""
                value={editJewelData.availability}
                onChange={handleInputChange}
            />
            <div className="buttonContainer">
                <button
                    type="submit"
                    className="">
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="deleteButton">
                    Delete
                </button>
            </div>
        </form>
    </div>
</>

  )
}
