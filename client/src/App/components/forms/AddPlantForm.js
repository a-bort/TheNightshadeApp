import React, { Component } from 'react';

class AddPlantForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      commonName: props.commonName || "",
      genus: props.genus || "",
      species: props.species || ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addPlant = this.addPlant.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addPlant(event){
    event.preventDefault();
    fetch('/api/plants/add', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      response.json().then(function(data){
        window.location = "/plants?message=" + data.message;
        console.log(data);
      })
    })
    .catch(function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>Common Name: </label>
          <input
            type="text"
            name="commonName"
            value={this.state.commonName}
            onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Genus: </label>
          <input
            type="text"
            name="genus"
            value={this.state.genus}
            onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Species: </label>
          <input
            type="text"
            name="species"
            value={this.state.species}
            onChange={this.handleInputChange}/>
        </div>
        <button name="add" onClick={this.addPlant}>Add Plant</button>
      </form>
    );
  }
}

export default AddPlantForm;
