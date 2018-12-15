import React, { Component } from 'react';

class Submit extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: props.value || ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    this.setState({value: event.target.value});
  }

  render(onSubmit) {
    return (
      <div>
        <button class="submit" onSubmit={this.handleSubmit}>{this.props.text || "Submit"}</button>
      </div>
    );
  }
}

export default Submit;
