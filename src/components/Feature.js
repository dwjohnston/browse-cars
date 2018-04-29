import React,{Component} from 'react'
import { connect } from 'react-redux';

import './style/Feature.css'; 

import * as Actions from "../actions/actions"; 

class FeatureRender extends Component{




  render() {

    const {feature, selectedModel} = this.props;

    return <div className ="Feature">
      <h2>Car Of The Week </h2> 

        <img src = {feature && feature.model && feature.model.imageUrl}/> 
        <p> {feature && feature.review}</p> 

     </div>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    feature: state.feature,
    selectedModel: state.selectedModel, 

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: modelId => dispatch(Actions.displayModelAction(null, modelId))
  }
}

const Feature = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureRender);



export default Feature;
