import React from 'react'
import { connect } from "react-redux";
import { deleteToy } from './redux/toyActions'
import { Link } from "react-router-dom";

class ToyCard extends React.PureComponent {
  
  componentDidUpdate() {
    console.log(`This component ${this.props.name} has changed`)
  }

  removeToy = (e) => {
    this.props.deleteToyWithDispatch(parseInt(e.target.dataset.toyid))
  }

  render() {
    // console.log(this.props)
    // let obj = this.props
    // if (this.props.viewToyId) {
    //   obj = this.findObj()
    // }
    const {name, img, likes, addLike, id} = this.props


    return (
        
      <div className="card">
          <Link to={`/toys/${id}`}> <h2> {name} </h2> </Link>
          <img alt={name} src={img} className="toy-avatar"/>
          <p>{likes}  Likes </p>
          <button 
            className="like-btn" 
            onClick={addLike}
            data-toyid={id}
            >
              Like &lt;3
            </button> 

            <button 
            className="delete-btn" 
            onClick={this.props.deleteToy}
            // onClick={(e) => this.props.deleteToy(e.target.dataset.toyid)}
            // onClick={this.props.deleteToyWithDispatch}
            data-toyid={id}
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

//let deleteToy = () => dispatch(deleteToy(toyID)) // == { deleteToy }