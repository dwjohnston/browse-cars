import React,{Component} from 'react'
import { connect } from 'react-redux';

import * as Actions from "../actions/actions";
import './style/Display.css'; 

class DisplayRender extends Component{

  componentDidMount() {
    this.props.onMount(this.props.match.params.make, this.props.match.params.model);
  }

  render() {

    const {selectedModel, selectedMake} = this.props;


    return <div className ="Display"> 

      {selectedMake && selectedModel && 
        <div><h2>{selectedMake.name} {selectedModel.name}</h2>
         <img src={selectedModel.imageUrl}/> 
         <span><strong>Price: </strong>{selectedModel.price.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                  })}
         </span>
        </div>
            
      }
 
     </div>;
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    selectedModel: state.selectedModel,
    selectedMake: state.selectedMake, 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: (makeId, modelId) => dispatch(Actions.displayModelAction(makeId, modelId))
  }
}

const Display = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayRender);



export default Display;
