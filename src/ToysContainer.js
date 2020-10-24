import React from 'react'
import ToyCard from './ToyCard'
 
const ToysContainer = (props) => {
    // console.log('rendering')
   
    return (
      <div id="toy-container">
        {
          props.toysArray.map(toyObj => {
            return (
              <ToyCard  key={toyObj.id}
                        name={toyObj.name} 
                        img={toyObj.image} 
                        likes={toyObj.likes}
                        addLike={props.addLikeFn}
                        id={toyObj.id}
              />
            )
          })
        }
          
        </div>
    )

}

export default ToysContainer;