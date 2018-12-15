import React, { Component } from 'react';

class Text extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: props.value || ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <label>{this.props.name}</label>
        <input type="text" text={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Text;
