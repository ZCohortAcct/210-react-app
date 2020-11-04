
// reducer manipulate the state
// CASE STATE TEACHES YOUR FN HOW TO MANIPULATE THE STATE 
// REDUCER ALWAYS RETURNS AN UPDATED STATE
export default function toyReducer(state={toysArr: []}, action){
    // create - adding toys to the array

    // update - toy

  
  switch (action.type) {
    // read/get - toy
    case 'GET_TOYS': 
      return { ...state,
        toysArr: action.payload
      }
    // delete - toy
    case 'DELETE_TOY': 
    debugger
    return { ...state,
      toysArr: state.toysArr.filter(toyObj => toyObj.id !== action.payload)
    }
    default:
      return  state
  }
}

