import React,{Component} from 'react'
import { connect } from 'react-redux';

import * as Actions from "../actions/actions";

import './style/Display.css'; 

class DisplayRender extends Component{

  componentDidMount() {
    console.log(this.props.match.params.model);

    this.props.onMount(this.props.match.params.make, this.props.match.params.model);
  }

  render() {

    const {params, selectedModel, selectedMake} = this.props;
    console.log(this.props);
    console.log(selectedModel, selectedMake); 

    return <div className ="Display"> 

      {selectedMake && selectedModel && 
        <div><h2>{selectedMake.name} {selectedModel.name}</h2>
         <img src={selectedModel.imageUrl}/> 
         <span>Price: </span><span>{selectedModel.price}</span>
        </div>
            
      }
 
     </div>;
  }
}


const mapStateToProps = (state, ownProps) => {

  console.log(state);
  return {
    selectedModel: state.selectedModel,
    selectedMake: state.selectedMake, 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: (makeName, modelId) => dispatch(Actions.displayModelAction(makeName, modelId))
  }
}

const Display = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayRender);



export default Display;
