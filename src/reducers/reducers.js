import * as ActionTypes from "../actions/actionTypes";
const initialState = {

    allMakes: [],
    allModels: [], 
    feature: null, 
    makes: [], 
    models: null, 
    selectedModel: null, 
    selectedMake: null, 
    selectedModelId: null, 
};

function populateFeature(state, action) {

    return {
        feature: action.data, 
    }
}

function populateMakes(state, action) {
    
    return {
        allMakes: action.data,  //redundant I know, but conceptually it make sense that the raw data is different to the 'what's displayed in the select box'. For example, what if later you were applying a 'only european cars' filter, or similar. 
        makes: action.data, 
        selectedMake: action.data.find(v => v.name == state.selectedMakeName)

    }
}

function populateModels(state, action) {


    console.log("populatemodels");
    return {
        allModels: action.data, 
        selectedModel: action.data.find(v => v.id == state.selectedModelId) //== intentional    //We need to populate the selectedModel if user is navigated straight to page and models haven't been populated yet. 
    }
}

function selectMake(state, action) {

    console.log(action);

    let models= {
        selectedMake: state.allMakes.find(v => v.id == action.makeId), 
        models: state.allModels.filter(v => v.makeId == action.makeId)  //== intentional
    }; 

    console.log(models); 
    console.log(state.allModels);
    return models; 
}

function selectModel(state, action) {

    console.log(action);
    console.log(state.allModels);

    return {
        selectedModel: state.allModels.find(v => v.id == action.modelId) //== intentional
    };
}

function displayModel(state, action) {
    return{
        selectedModelId: action.modelId, 
        selectedMakeName: action.makeName,

    }
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.POPULATE_FEATURE:
      return Object.assign({}, state, populateFeature(state, action));
      case ActionTypes.POPULATE_MAKES:
      return Object.assign({}, state, populateMakes(state, action));
      case ActionTypes.POPULATE_MODELS:
      return Object.assign({}, state, populateModels(state, action));
      case ActionTypes.SELECT_MAKE:
      return Object.assign({}, state, selectMake(state, action));
      case ActionTypes.SELECT_MODEL:
      return Object.assign({}, state, selectModel(state, action));
      case ActionTypes.DISPLAY_MODEL:
      return Object.assign({}, state, displayModel(state, action));
      default:
      return state;
    }
  }
  