import React from 'react';
import ToyHeader from './ToyHeader.js'
import ToyForm from './ToyForm.js'
import ToysContainer from './ToysContainer.js'

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
    let toyName = e.target.dataset.toyname;

    this.setState((preState) => ({toysArray: preState.toysArray.map(toyObj => (toyObj.name === toyName) ? {...toyObj, likes: toyObj.likes + 1 } : toyObj)}), () => console.log(this.state))
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
    fetch("http://localhost:2000/toys", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(toy => this.setState(
      (preState) => {
        return {toysArray: [...preState.toysArray, toy]}
      }, 
      () => console.log(this.state.toysArray)
    ))
  }

  render() {
    console.log('App Render')
    return (
      <div className="Main">
        <ToyHeader />
        <ToyForm addToyToToyArr={this.addNewToy} />
        <ToysContainer toysArray={this.state.toysArray} addLikeFn={this.addLike}/>
      </div>
    )}
}