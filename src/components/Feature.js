import React,{Component} from 'react'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'; 
import './style/Feature.css'; 

import * as Actions from "../actions/actions"; 

class FeatureRender extends Component{




  render() {

    const {feature} = this.props;

    return <div className ="Feature">
      <h2>Car Of The Week </h2> 

        <NavLink to = {`${feature && feature.model && feature.model.makeId}/model/${feature && feature.model && feature.model.id}`}>
          <img src = {feature && feature.model && feature.model.imageUrl} />
        </NavLink>
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
