import React, { Component } from 'react';
import PlantContextView from '../views/PlantContextView';

class PlantContextLink extends Component {

  constructor(props){
      super(props);
      this.state = {
        shown: false
      };
  }

  buttonClicked = function(){
    this.setState({shown: true});
  }

  viewClosed = function(){
    this.setState({shown: false});
  }

  render() {
    return (
      <span>
        <button onClick={() => this.buttonClicked()}>{this.props.plant.commonName}</button>
        {this.state.shown && <PlantContextView plant={this.props.plant} visible={this.state.shown} onClose={() => this.viewClosed()}/>}
      </span>
    );
  }
}

export default PlantContextLink;
