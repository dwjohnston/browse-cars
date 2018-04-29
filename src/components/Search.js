import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as Actions from "../actions/actions"; 
import {NavLink} from "react-router-dom";

import './style/Search.css'; 

class SearchRender extends Component{




  render() {

   

    const {makes, models,selectedMake, selectedModel,  onChangeMake, onChangeModel} = this.props; 

    console.log("render event"); 
    console.log(selectedMake); 

    return <div className ="Search">
 

      {/** 
        There's probably better react implmentations of the select boxes. 
      */}
      <select className = "Search-Makes" name ="make" onChange = {e => onChangeMake(e.target.value)}>
          <option disabled = {true} selected ={true}>make</option>  
          {makes && makes.map((v,i) => <option value = {v.id} key = {i} selected ={selectedMake && selectedMake.id === v.id}>{v.name}</option>)}
        </select> 



        <select className ="Search-Models" name = "model" onChange = {e => onChangeModel(e.target.value)}> 
        <option disabled = {true} selected ={true}>model</option>  

        {models && models.map((v,i) => <option value = {v.id} key = {i} selected ={selectedModel && selectedModel.id === v.id}>{v.name}</option>)}

        </select> 

    <NavLink className = {(selectedMake && selectedModel) ? 'active' : 'not-active'}  to = {`/${selectedMake && selectedMake.name}/${selectedModel && selectedModel.id}`}> search </NavLink>
    
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
    onChangeMake: v => dispatch(Actions.selectMakeAction(v)), 
    onChangeModel: v => dispatch(Actions.selectModelAction(v))
  }
}

const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRender);



export default Search;
