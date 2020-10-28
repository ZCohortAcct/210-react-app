import React from 'react'


class ToyCard extends React.PureComponent {
  
  componentDidUpdate() {
    console.log(`This component ${this.props.name} has changed`)
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
            data-toyid={this.props.id}
            >
              Remove
            </button> 
      </div>
    );
  }
}

export default ToyCard;