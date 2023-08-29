import { useState, useEffect } from 'react'

export default function App() {
const [jewels, setJewels ] = useState([])

async function getJewels(url){
  const res = await fetch(url)
  const data = await res.json()
  setJewels(data)
}
console.log(jewels)
useEffect(() => {
  getJewels('http://localhost:3000/jewels')
}, [])
  return (
    <>
    <h2>Hello There</h2>
    </>
  )
}


