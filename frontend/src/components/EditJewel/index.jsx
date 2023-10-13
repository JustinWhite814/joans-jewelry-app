import {useState} from 'react'
import { updateJewels } from '../../../utils/backend'
export default function EditJewel({jewel}) {
    console.log('I am inside the editjewel component:', jewel)
    const [editFormData, setEditFormData] = useState({
        title: jewel.title,
        price: jewel.price,
        category: jewel.category,
        availability: jewel.category,
        image: jewel.image
    })

  function handleInputChange(event){
    setEditFormData({
        ...editFormData,
        [event.target.name]: event.target.value
    })
  }  

  function handleSubmit(e){
    e.preventDefault()
    updateJewels(editFormData, jewel._id)
        .then(() => console.log(editFormData))
  }
  return (
    <form
    onSubmit={handleSubmit}
    className="">
    <input
        name="title"
        className=""
        placeholder="Jewel Title"
        value={editFormData.title}
        onChange={handleInputChange}
    />
    <br />
    <input
        name="price"
        className=""
        placeholder="price"
        value={editFormData.price}
        onChange={handleInputChange}
    />
    <input
        name="category"
        className=""
        placeholder="category"
        value={editFormData.category}
        onChange={handleInputChange}
    />
    <input
        name="availability"
        className=""
        placeholder="availability"
        value={editFormData.availability}
        onChange={handleInputChange}
    />
    <input
        name="image"
        className=""
        placeholder="img url"
        value={editFormData.image}
        onChange={handleInputChange}
    />
    <button
        type="submit"
        className="">
        edit
    </button>
</form>
  )
}
