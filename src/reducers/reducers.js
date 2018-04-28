import * as ActionTypes from "../actions/actionTypes";
const initialState = {

    feature: null, 
    makes: [], 
    models: null, 
    selectedCar: null, 
};


function someAction(state, action) {


    return state; 
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.GET_FEATURE:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.GET_MAKES:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.GET_MODELS:
      return Object.assign({}, state, someAction(state, action));
      case ActionTypes.GET_CAR:
      return Object.assign({}, state, someAction(state, action));
      default:
      return state;
    }
  }
  