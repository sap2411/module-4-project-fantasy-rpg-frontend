import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class LogIn extends Component {

  state = {
    email: '',
    redirect: null
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.logIn(this.state.email)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
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
        {this.props.formErrors &&
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled text-danger">
              {this.props.formErrors.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
          </div>
        }

      </form>
    )
  }
}

export default LogIn