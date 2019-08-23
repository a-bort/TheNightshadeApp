import React, { Component } from 'react';

class PlantContextView extends Component {

  render() {
    return (
        <div>
          <span><button onClick={() => this.props.onClose()}>X</button></span>
          <label>Name:</label><span>{this.props.plant.commonName}</span>
        </div>
    );
  }
}

export default PlantContextView;
