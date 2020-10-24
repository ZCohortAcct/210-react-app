import React from 'react'
import { Link } from "react-router-dom";


// const ToyHeader = () => {}
function ToyHeader() {
  return (
      <div id="toy-header">
        <img
          src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png"
          alt="toy-header"
        />
         <Link to="/toys/new"><button>Add New Toy</button></Link>
         <Link to="/toys"><button>View Toys</button></Link>
      </div>
  )
}

export default ToyHeader;