import React from 'react'
import ToyCard from './ToyCard'
 
const ToysContainer = (props) => {
    // console.log('rendering')
   
    return (
      <div id="toy-container">
        {
          props.arrOfToys.map(toyObj => {
            return (
              <ToyCard  key={toyObj.id}
                        name={toyObj.name} 
                        img={toyObj.image} 
                        likes={toyObj.likes}
                        addLike={props.addLikeFn}
                        deleteToy={props.deleteToyFn}
                        id={toyObj.id}
              />
            )
          })
        }
          
        </div>
    )

}

export default ToysContainer;