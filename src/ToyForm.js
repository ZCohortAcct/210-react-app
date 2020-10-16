import React, { Component } from 'react'

class ToyForm extends Component {
  state = { 
    toyName: '',
    toyImage:''
   }
  
  //  handleToyNameInput = (e) => {
  //   // console.log(e.target.value)
  //   this.setState({toyName: e.target.value})
  // }

  // handleToyImageInput = (e) => {
  //   // console.log(e.target)
  //   this.setState({toyImage: e.target.value})
  // }

  handleInput = (e) => {
    // console.log(e.target.name)
    
    // TypeError: Cannot read property 'value' of null 
    // e.persist()
    // let value = e.target.value
    // let inputName = e.target.name
    // this.setState({[inputName]: value}, ()=>console.log(this.state))

    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
  }

  makeNewToy = () => {
     const serverData = {
      "name": this.state.toyName,
      "image": this.state.toyImage,
      "likes": 0
    }
    this.props.addToyToToyArr(serverData)

    this.setState({ 
      toyName: '',
      toyImage:''
     })
  } 

  
  render() {
    return (
      <div>
        <label>Name</label>
        <input name="toyName" 
          onChange={this.handleInput} 
          value={this.state.toyName}
        />

        <label>Image URL</label>
        <input name="toyImage" 
          onChange={this.handleInput} 
          value={this.state.toyImage}
        />
        <button onClick={this.makeNewToy}> Make New Toy!!</button>
      </div>
    );
  }
}

// function SearchBar() {
//   return (
//     <div id="search-bar">
//     <input />
//     <button>Search!</button>
//   </div>
//   )
// }
// export default SearchBar;

export default ToyForm;