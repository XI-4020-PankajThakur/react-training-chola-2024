import React from 'react'

export default function Card(props) {
  return (
    <div className='card-div'> 
    <img src={props.src}  />
    <div className='card-body'>
<h1>{props.title}</h1>
<p className='descriptiion-div'>{props.description}</p>
<h5>{props.cardNumber}</h5>
<button onClick={props.onClick}>Add me</button>
{/* <button onClick={props.addOnClick}> Add </button> */}
</div>
    </div>
  )
}
