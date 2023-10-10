import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AllJewels from '../AllJewels'
import CreateJewel from '../CreateJewel'
export default function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<AllJewels />}/>
          <Route path='/new' element={<CreateJewel />} />
    </Routes>

    </>
  )
}


