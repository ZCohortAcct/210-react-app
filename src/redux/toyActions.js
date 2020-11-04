const GET_TOYS = 'GET_TOYS'
const DELETE_TOY = 'DELETE_TOY'

export const getToys = () => {
  // get the toys
  // fetch request
  // debugger
 return (dispatch) => {
  fetch('http://localhost:2000/toys')
  .then(res => res.json())
  .then(severData => {
      // send serverToys to the reducer, will need to dispatch  
      dispatch({type: GET_TOYS, payload: severData})
    })
 }
  

}

// export const deleteToy = (toyObjID) => {
  export const deleteToy = (event) => {

  // console.log(event)
  const toyObjID = parseInt(event.target.dataset.toyid)
  // const toyObjID = event.target.dataset.toyid

  return ((dispatch) => {
    fetch(`http://localhost:2000/toys/${toyObjID}`, {
      method: "delete",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(deletedObj => dispatch({type: DELETE_TOY, payload: toyObjID}))
  })
}