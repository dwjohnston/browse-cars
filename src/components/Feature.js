import React,{Component} from 'react'
import { connect } from 'react-redux';

import './style/Feature.css'; 

class FeatureRender extends Component{
  render() {

    const {feature} = this.props;

    return <div className ="Feature">feature
      {JSON.stringify(feature)}
     </div>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    feature: state.feature,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const Feature = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureRender);



export default Feature;
