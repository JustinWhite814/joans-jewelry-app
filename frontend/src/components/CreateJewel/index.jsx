import React from 'react'
import { createJewels } from '../../../utils/backend'
export default function App() {

  return (
    <>
<form
                    onSubmit={handleSubmit}
                    className="">
                    <input
                        name="title"
                        className=""
                        placeholder="Jewel Title"
                        value={createFormData.name}
                        onChange={handleInputChange}
                    />
                    <br />
                    <input
                        name="price"
                        className=""
                        placeholder="price"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <input
                        name="category"
                        className=""
                        placeholder="category"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <input
                        name="availability"
                        className=""
                        placeholder="availability"
                        value={createFormData.content}
                        onChange={handleInputChange}
                    />
                    <input
                        name="image"
                        className=""
                        placeholder="img url"
                        value={createFormData.content}
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


