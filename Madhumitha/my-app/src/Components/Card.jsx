import React, { useState } from 'react'


export default function Card(props) {
  // handleClick = () => {
  //   // Handle the click event here
  //   console.log('Button clicked!');
  // };

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

 const addOnClick = (id) => {
   alert('Added Successfully!');
   setIsButtonDisabled(true);
  
 };
  return (
    <div className='card-div'> 
    <img src={props.src}  />
    <div className='card-body'>
<h1>{props.title}</h1>

<h5>{props.key}</h5>
<p> <b>{props.price}</b></p>
<p className='descriptiion-div'>{props.description}</p>

<button onClick={addOnClick} disabled={isButtonDisabled}>Add to cart</button>
</div>
    </div>
  )
}
