import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as Actions from "../actions/actions"; 
import {NavLink} from "react-router-dom";

import './style/Search.css'; 

class SearchRender extends Component{




  render() {

    const {makes, models,selectedMake, selectedModel,  onChangeMake, onChangeModel} = this.props; 


    return <div className ="Search">

    {JSON.stringify(makes)}
    {JSON.stringify(models)}
    {JSON.stringify(selectedModel)}

    

    <label> make: 
      <select className = "Search-Makes" name ="make" onChange = {onChangeMake}> 
          {makes && makes.map((v,i) => <option value = {v.id} key = {i}>{v.name}</option>)}
        </select> 

        </label> 

    <label> model: 
        <select className ="Search-Models" name = "model" onChange = {onChangeModel}> 
        {models && models.map((v,i) => <option value = {v.id} key = {i}>{v.name}</option>)}

        </select> 

        </label> 


        <NavLink to = {selectedMake && selectedModel && [selectedMake.name, selectedModel.id].join("/")}>Search</NavLink> 
    
     </div>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    makes: state.makes,
    models: state.models, 
    selectedMake: state.selectedMake, 
    selectedModel: state.selectedModel,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeMake: event => dispatch(Actions.selectMakeAction(event.target.value)), 
    onChangeModel: event => dispatch(Actions.selectModelAction(event.target.value))
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRender);



export default Search;
