
// reducer manipulate the state
// CASE STATE TEACHES YOUR FN HOW TO MANIPULATE THE STATE 
// REDUCER ALWAYS RETURNS AN UPDATED STATE
export default function toyReducer(state={toysArr: []}, action){
    // create - adding toys to the array
    // read/get - toy
    // update - toy
    // delete - toy
  
  switch (action.type) {
    case 'GET_TOYS': 
      return { ...state,
        toysArr: action.payload
      }
    default:
      return  state
  }
}

