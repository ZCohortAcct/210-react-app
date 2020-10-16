import React from 'react'
import ToyCard from './ToyCard'
 
const ToysContainer = (props) => {
    // console.log('rendering')
   
    return (
      <div id="toy-container">
        {
          props.toysArray.map(toyObj => {
            return (
              <ToyCard  key={toyObj.name}
                        name={toyObj.name} 
                        img={toyObj.image} 
                        likes={toyObj.likes}
                        addLike={props.addLikeFn}
              />
            )
          })
        }
          
        </div>
    )

}

export default ToysContainer;