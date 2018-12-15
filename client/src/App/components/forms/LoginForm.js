import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(event){
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  login(event){
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      console.log(response);
      window.location = "/plants?message=" + response.message;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}/>
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}/>
        </div>
        <button name="login" onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default LoginForm;
