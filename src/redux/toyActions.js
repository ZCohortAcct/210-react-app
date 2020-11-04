const GET_TOYS = 'GET_TOYS'

export const getToys = (dispatch) => {
  // get the toys
  // fetch request
  fetch('http://localhost:2000/toys')
  .then(res => res.json())
  .then(severData => {
      // send serverToys to the reducer, will need to dispatch  
      dispatch({type: GET_TOYS, payload: severData})
    })
  

}