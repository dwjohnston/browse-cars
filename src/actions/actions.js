import * as ActionTypes from "./actionTypes";


export function getFeatureAction(value) {
  return {
    type: ActionTypes.GET_FEATURE,
    value: value,
  }
}

export function getMakesAction() {
  return {
    type: ActionTypes.GET_MAKES, 
  }
}


export function getModelsAction() {
  return {
    type: ActionTypes.GET_MODELS,
  }
}

export function getCarAction() {
  return {
    type: ActionTypes.GET_CAR,
  }
}
