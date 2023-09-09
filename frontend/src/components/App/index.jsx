import { useState, useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import AllJewels from '../AllJewels'
export default function App() {

  return (
    <>
    <Routes>
          <Route path='/' element={<AllJewels />}/>
    </Routes>

    </>
  )
}


