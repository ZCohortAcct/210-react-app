import React from 'react';
import ToyHeader from './ToyHeader.js'
import ToyForm from './ToyForm.js'
import ToysContainer from './ToysContainer.js'
import { Route, Switch } from "react-router-dom";
import ToyCard from './ToyCard'
import { connect } from "react-redux";
import { getToys } from './redux/toyActions'

// change server port
// json-server --watch db.json --port 2000

class App extends React.Component {
  // this.props.getToys()

  // state = {
  //   toysArray: []
  // }

  componentDidMount() {
    // add code
    this.props.getToysWithDispatch()
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
      this.setState((preState) => (
        {toysArray: preState.toysArray.map(toyObj => (toyObj.name === foundToy.name) ? {...toyObj, likes: toyObj.likes + 1 } : toyObj)}
      ), () => console.log(this.state))
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
    console.log(this.props)
    return (
      <div className="Main">
         < ToyHeader />
      <Switch>
        
       <Route  path='/toys/new' render={(routerProps) => <ToyForm {...routerProps} addToyToToyArr={this.addNewToy} />}/>

        {/* <Route  path='/toys/test' component={ToyForm}/> */}
          

        <Route  path='/toys/:id' render={ (routerProps) => {
            // console.log(routerProps.match.params)
            const toyId = parseInt(routerProps.match.params.id)

            const toyObj = this.props.toysArr.find(toyArrObj => toyArrObj.id === toyId)

            // console.log(toyObj)

            if (toyObj) {
              return (
              <ToyCard  key={toyObj.id}
                        name={toyObj.name} 
                        img={toyObj.image} 
                        likes={toyObj.likes}
                        addLike={this.addLike}
                        id={toyObj.id}
                        deleteToy={this.deleteToy}
              />
            )
            } else {
              return <div>Loading... </div>
            }
          }} 
        />

        <Route path='/toys'>
          <ToysContainer arrOfToys={this.props.toysArr} addLikeFn={this.addLike} />
          {/* <div>Display Toys here</div> */}
        </Route>
      </Switch>
        
      </div>
    )}
} 
// store = {
//   toyReducer: {toysArr: []},
//   otherReducer: {otherInfo: {}}
// }
// store.toysReducer.toysArr

// mSTP == mapStateToProps
// const mSTP = (store) => {
  // console.log(store)

// if store = [], in reducer
// return {toysArray: store}

// store = {toysArr: []}
// return {toysArray: store.toysArr}
// }


const mSTP = (store) => store // give access to getState() frm store

  
const mDSTP = (dispatch) => { // give access to dispatch() frm store
  return {
    getToysWithDispatch: () => dispatch(getToys())
  }
}

export default connect(mSTP, mDSTP)(App)

//CONNECT TAKES TWO ARGUMENTS
//THE FIRST ARGUMENT IS A FUNCTION THAT WILL RECEIVE STATE FROM CONNECT AS AN ARGUMENT
//THE FUNCTION SHOULD RETURN AN OBJECT THAT WILL BE MERGED TO THIS COMPONENT'S PROPS
//THE CONVENTIONAL NAME FOR THIS FUNCTION IS MAPSTATETOPROPS (but you can obvs call it whatever you want)

//THE SECOND ARGUMENT IS CONVENTIONALLY NAMED MAPDISPATCHTOPROPS, BUT IF YOU DON'T PROVIDE IT, CONNECT WILL AUTOMATICALLY PUT THE DISPATCH FUNCTION IN PROPS FOR YOU TO USE
//MAPDISPATCH TO PROPS IS A FUNCTION THAT WILL RECEIVE DISPATCH AS AN ARGUMENT, AND IT WILL ALLOW US TO COMPOSE AN OBJECT THAT WILL BE MAPPED TO PROPS WITH OUR ACTION CREATORS WRAPPED IN A DISPATCH INVOCATION

//connect returns a function that receives a component as an argument
//in other words, connect returns a higher order component
//that returned function will pass any information we need from the Redux store's state OR an wrapped action creators to our component as props