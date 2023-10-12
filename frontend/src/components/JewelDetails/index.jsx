import React from 'react'

export default function JewelDetails(props) {
  console.log(props)
  return (
    <div>
        <img src={props.image} alt={props.title} />
        <h2>${props.title}</h2>
        <h2>${props.category}</h2>
        <h2>${props.price}</h2>
        <h2>{props.availability}</h2>
    </div>
  )
}
