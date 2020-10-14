import React from 'react'
import ToyCard from './ToyCard'
 
class ToysContainer extends React.Component {

  state = {
    toysArray: [
      {name: "Woody", src: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png", likes: 5},
      {name: "Buzz Lightyear", src: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png", likes: 4},
      {name: "Mr. Potato Head", src: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217", likes: 3},
      {name: "Slinky Dog", src: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png", likes: 4},
      {name: "Rex", src: "http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png", likes: 1},
      {name: "Bo Peep", src: "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png", likes: 2},
      {name: "Hamm", src: "https://cdn140.picsart.com/244090226021212.png?r1024x1024", likes: 0},
      {name: "Little Green Men", src: "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png", likes: -2}
    ]
  }

  addLike = (e) => {
    // need a conditinal data-toyname == obj.name do this 
    // else return obj
    let toyName = e.target.dataset.toyname;

    this.setState((preState) => {
      return (
        { 
          toysArray: preState.toysArray.map( toyObj => {
            if(toyObj.name === toyName){
              return {...toyObj, likes: toyObj.likes + 1 }
            } else {
              return toyObj
            }
          })
        }
      )
    }, () => console.log(this.state))
    // console.log(e.target)
  }


  render() {
    console.log('rendering')
    return (
      <div id="toy-container">
        {
          this.state.toysArray.map(toyObj => {
            return (
              <ToyCard  key={toyObj.name}
                        name={toyObj.name} 
                        img={toyObj.src} 
                        likes={toyObj.likes}
                        addLike={this.addLike}
              />
            )
          })
        }
          
        </div>
    )
  }
}

export default ToysContainer;