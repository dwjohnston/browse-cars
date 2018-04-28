import * as ActionTypes from "../actions/actionTypes";
const initialState = {

    feature: null, 
    makes: [], 
    models: null, 
    selectedCar: null, 
};


function someAction(state, action) {

    console.log(action);

    return state; 
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.POPULATE_FEATURE:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.POPULATE_MAKES:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.POPULATE_MODELS:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.SELECT_MAKE:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.SELECT_MODEL:
      return Object.assign({}, state, someAction(state, action));
      default:
      return state;
    }
  }
  