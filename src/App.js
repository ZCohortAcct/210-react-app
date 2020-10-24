import React from 'react';
import ToyHeader from './ToyHeader.js'
import ToyForm from './ToyForm.js'
import ToysContainer from './ToysContainer.js'
import { Route, Switch } from "react-router-dom";
import ToyCard from './ToyCard'


// change server port
// json-server --watch db.json --port 2000

export default class App extends React.Component {
  state = {
    toysArray: []
  }

  componentDidMount() {
   fetch('http://localhost:2000/toys')
   .then(res => res.json())
   .then(severData => this.setState({toysArray: severData}))
  }

  addLike = (e) => {
    // need a conditinal data-toyname == obj.name do this 
    // else return obj
    let toyId = parseInt(e.target.dataset.toyid);
    
    //  console.log(toyId)
    const foundToy = this.state.toysArray.find(toyObj => toyObj.id === toyId)

    fetch(`http://localhost:2000/toys/${toyId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({...foundToy, likes: foundToy.likes + 1 } )
    })
    .then(res => res.json())
    .then(udpatedToyObj => {
      this.setState((preState) => ({toysArray: preState.toysArray.map(toyObj => (toyObj.name === foundToy.name) ? {...toyObj, likes: toyObj.likes + 1 } : toyObj)}), () => console.log(this.state))
    })


    // this.setState((preState) => {
    //   return (
    //     { 
    //       toysArray: preState.toysArray.map( toyObj => {
    //         if(toyObj.name === toyName){
    //           return {...toyObj, likes: toyObj.likes + 1 }
    //         } else {
    //           return toyObj
    //         }
    //       })
    //     }
    //   )
    // }, () => console.log(this.state))
    // console.log(e.target)
  }

  addNewToy = (newToy) => {
    return (
      fetch("http://localhost:2000/toys", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify(newToy)
      })
      .then(res => res.json())
      .then(toy => {
        this.setState(
          (preState) => {
            return {toysArray: [...preState.toysArray, toy]}
          }, 
          () => console.log(this.state.toysArray)
        )
        return toy
        }
      )
    )
  }

  render() {
    // console.log('App Render')
    return (
      <div className="Main">
         < ToyHeader />
      <Switch>
        
       <Route  path='/toys/new' render={(routerProps) => <ToyForm {...routerProps} addToyToToyArr={this.addNewToy} />}/>

        {/* <Route  path='/toys/test' component={ToyForm}/> */}
          

        <Route  path='/toys/:id' render={ (routerProps) => {
            // console.log(routerProps.match.params)
            const toyId = parseInt(routerProps.match.params.id)

            const toyObj = this.state.toysArray.find(toyArrObj => toyArrObj.id === toyId)

            // console.log(toyObj)

            if (toyObj) {
              return (
              <ToyCard  key={toyObj.id}
                        name={toyObj.name} 
                        img={toyObj.image} 
                        likes={toyObj.likes}
                        addLike={this.addLike}
                        id={toyObj.id}
              />
            )
            } else {
              return <div>Loading... </div>
            }
          }} 
        />

        <Route path='/toys'>
          < ToysContainer toysArray={this.state.toysArray} addLikeFn={this.addLike}/>
        </Route>
      </Switch>
        
      </div>
    )}
} 