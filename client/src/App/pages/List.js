import React, { Component } from 'react';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
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
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {(data && data.plants && data.plants.length) ? (
          <div>
            {/* Render the list of items */}
            {data.plants.map((item) => {
              return(
                <div>
                  {item.commonName}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default List;
