import React from "react";
export default function Cards(props) {
  return (
    <div
      className={`card border mb-4 mx-4 p-4 ${props.enabled ? "bg-transparent" : "bg-gray"}`}
      onClick={() => {
        props.onCardClicked(props.cardNumber);
      }}
    >
      <h2>{props.title}</h2>
      <span>{props.children}</span>
      <img src={props.imageUrl}/>
    </div>
  );
}
