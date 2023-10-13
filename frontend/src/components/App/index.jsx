import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AllJewels from '../AllJewels'
import CreateJewel from '../CreateJewel'
import JewelDetails from '../JewelDetails'
import EditJewel from '../EditJewel'
export default function App() {
  const [jewelDetails, setJewelDetails] = useState({})
  return (

    <>
    <Routes>
          <Route path='/' element={<AllJewels setJewelDetails={setJewelDetails}/>}/>
          <Route path='/new' element={<CreateJewel />} />
          <Route path='/details' element={<JewelDetails {...jewelDetails} setJewelDetails={setJewelDetails}/>} />
          <Route path='/edit' element={<EditJewel jewel={jewelDetails} />}/>
    </Routes>

    </>
  )
}


