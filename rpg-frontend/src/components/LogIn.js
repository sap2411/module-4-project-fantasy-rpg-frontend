import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class LogIn extends Component {

  state = {
    email: '',
    fetchMessages: '',
    redirect: null
  }

  handleSubmit = event => {
    event.preventDefault()
    this.getUser(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  getUser = user => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    }
    fetch(this.props.logInURL, options).then(resp => resp.json())
    .then(this.handleFetchResponse)
  }

  handleFetchResponse = response => {
      if (response.errors) {
          // Set error messages
          this.setState({fetchMessages: response.errors})
      } else {
          // Redirect via state update
          this.setState({redirect: '/new-game'})
          // Fake log in user
          this.props.logIn(response.data)
      }
  }

  render () {
    // Redirect function used after form submit
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <form className="card col-3 my-5 mx-auto p-3 rounded-lg" onSubmit={event => this.handleSubmit(event)}>
        <div className="form-group col-sm d-flex justify-content-center">
          <h3>Log In</h3>
        </div>
        <div className="form-group col-sm">
          <input type="email" className="form-control" placeholder="Email Address" name="email" value={this.state.email} onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group col-sm d-flex justify-content-center">
          <button type="submit" className="btn btn-block btn-success">
            <i className="fas fa-sign-in-alt"></i>
            <span className="d-none d-sm-none d-md-inline"> Log In</span>
          </button>
        </div>

        {/* Conditionally render via && operator acting as if statement */}
        {this.state.fetchMessages &&
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled text-danger">
              {this.state.fetchMessages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
          </div>
        }

      </form>
    )
  }
}

export default LogIn