import React from 'react'
import { connect } from "react-redux";
import { deleteToy } from './redux/toyActions'

class ToyCard extends React.PureComponent {
  
  componentDidUpdate() {
    console.log(`This component ${this.props.name} has changed`)
  }

  removeToy = (e) => {
    this.props.deleteToyWithDispatch(parseInt(e.target.dataset.toyid))
  }

  render(){
    console.log('rendering ToyCard')
    return (
      <div className="card">
           <h2> {this.props.name} </h2>
           <img alt={this.props.name} src={this.props.img} className="toy-avatar"/>
           <p>{this.props.likes}  Likes </p>
           <button 
            className="like-btn" 
            onClick={this.props.addLike}
            data-toyid={this.props.id}
            >
              Like &lt;3
            </button> 

            <button 
            className="delete-btn" 
            onClick={this.props.deleteToy}
            // onClick={(e) => this.props.deleteToy(e.target.dataset.toyid)}
            // onClick={this.props.deleteToyWithDispatch}
            data-toyid={this.props.id}
            >
              Remove
            </button> 
      </div>
    );
  }
}

// const mDTP = (dispatch) => {
//   return {
//     deleteToyWithDispatch: (toyID) => dispatch(deleteToy(toyID))
//   }
// }

export default connect(null, { deleteToy })(ToyCard);
// export default connect(null, mDTP)(ToyCard);