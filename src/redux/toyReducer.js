
// reducer manipulate the state
// CASE STATE TEACHES YOUR FN HOW TO MANIPULATE THE STATE 
// REDUCER ALWAYS RETURNS AN UPDATED STATE
export default function toyReducer(state={toysArr: [], newToy: ''}, action){
    // update - toy
  switch (action.type) {
    // read/get - toy
    case 'GET_TOYS': 
      return { ...state,
        toysArr: action.payload
      }
    // delete - toy
    case 'DELETE_TOY': 
    // debugger
    return { ...state,
      toysArr: state.toysArr.filter(toyObj => toyObj.id !== action.payload)
    }
   // create - adding a toy to the array
    case 'ADD_TOY':
      // debugger
      state.toysArr.push(action.payload)
      const newArr = state.toysArr
      return {...state,
        toysArr: newArr,
        newToy: action.payload
        // toysArr: state.toysArr.push(action.payload)
        // toysArr: [...state.toysArr, action.payload]
      }

    default:
      return  state
  }
}

