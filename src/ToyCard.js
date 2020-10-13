import React from 'react'


const ToyCard = (props) => {
  return (
    <div className="card">
         <h2> {props.name} </h2>
         <img alt={props.name} src={props.img} className="toy-avatar"/>
         <p>{props.likes}  Likes </p>
         <button 
          className="like-btn" 
          onClick={props.addLike}
          data-toyname={props.name}
          >
            Like &lt;3
          </button> 
    </div>
  );
}

export default ToyCard;