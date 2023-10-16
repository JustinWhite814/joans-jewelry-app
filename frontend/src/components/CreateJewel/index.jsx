import {useState, useEffect} from 'react'
import { createJewels } from '../../../utils/backend'
import { useNavigate } from 'react-router-dom'

export default function CreateJewel() {
    const navigate = useNavigate
    const [createFormData, setCreateFormData] = useState({
        title: '',
        price: '',
        category: '',
        availability: '',
        image: ''
    })

  function handleSubmit(e){
    e.preventDefault()
    setCreateFormData({
        title: '',
        price: '',
        category: '',
        availability: '',
        image: ''
    })
    createJewels({...createFormData})
        .then(() => navigate('/'))
  }
  function handleInputChange(event) {
    setCreateFormData({
        ...createFormData,
        [event.target.name]: event.target.value
    })
}

  return (
    <>
    <form
        onSubmit={handleSubmit}
        className="">
        <input
            name="title"
            className=""
            placeholder="Jewel Title"
            value={createFormData.title}
            onChange={handleInputChange}
        />
        <br />
        <input
            name="price"
            className=""
            placeholder="price"
            value={createFormData.price}
            onChange={handleInputChange}
        />
        <input
            name="category"
            className=""
            placeholder="category"
            value={createFormData.category}
            onChange={handleInputChange}
        />
        <input
            name="availability"
            className=""
            placeholder="availability"
            value={createFormData.availability}
            onChange={handleInputChange}
        />
        <input
            name="image"
            className=""
            placeholder="img url"
            value={createFormData.image}
            onChange={handleInputChange}
        />
        <button
            type="submit"
            className="">
            Post
        </button>
    </form>
    </>
  )
}


