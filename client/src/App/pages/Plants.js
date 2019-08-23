import React, { Component } from 'react';
import PlantContextLink from '../components/links/PlantContextLink';

class Plants extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
    this.loaded = false;
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/api/plants/get')
    .then(res => res.json())
    .then(data => this.setState({ data }))
    .then(this.loaded = true)
  }

  render() {
    const { data } = this.state;
    const { loaded } = this.loaded;

    return (
      <div className="App">
        <a href="/add">+Add</a>
        <h1>Plant Database</h1>
        {/* Check to see if any items are found*/}
        {
          (data && data.plants && data.plants.length)
          ? (
            <div>
              {/* Render the list of items */}
              {data.plants.map((item) => {
                return(
                  <div key={item.plantID}>
                    <PlantContextLink plant={item} />
                  </div>
                );
              })}
            </div>
          )
        : !loaded
        ? (
          <div>
            <h3>Loading</h3>
          </div>
          )
        : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Plants;
