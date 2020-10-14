import React, { Component } from 'react'

// function ToyCard(props) {
//   return (
//     <div className="card">
//           <h2> {props.name} </h2>
//           <img alt={props.name} src={props.img} className="toy-avatar"/>
//           <p>{props.likes}  Likes </p>
//           <button className="like-btn">Like &lt;3</button>
//         </div>
//   )
// }

// export default ToyCard;

// export default class ToysContainer extends React.Component {
// class ToysContainer extends React.Component {

class ToyCard extends Component {
  // constructor(props) {
  //   super(props);
  //   // Don't call this.setState() here!
  //   this.state = {likes: props.likes };
  // }
  state = { likes: this.props.likes }
  
  addLike = () => {
    //this.setState is an instance method that comes from the Component class we're inheriting from
    //It accepts TWO potential FIRST arguments & a 2nd arg
      // 1st: object with a key of the value in state we want to change plus the new value
      // 2nd: fn, allowing access to preState
   // second argument of a callback to run once setState has completed running
      //2nd: cb

    // console.log(this)
    // const newLikes = this.state.likes + 1
    // this.setState({likes: newLikes})

    this.setState((preState) => ({likes: preState.likes + 1}), () => console.log(this.state) )
  }

  // addLike() {
  //   console.log(this)
  // }

  render() {
    const {img, name} = this.props
    return (
      <div className="card">
           <h2> {this.props.name} </h2>
           <img alt={name} src={img} className="toy-avatar"/>
           <p>{this.state.likes}  Likes </p>
           <button className="like-btn" onClick={this.addLike}>Like &lt;3</button> 
      </div>
    );
  }
}
