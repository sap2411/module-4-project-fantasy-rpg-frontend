import React, {Component} from 'react';

class CreateAccount extends Component {

  state = {
    first_name: '',
    last_name: '',
    email: '',
    fetchMessages: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createNewUser(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createNewUser = newUser => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }
    fetch(this.props.usersURL, options).then(resp => resp.json())
    .then(json => {
      if (json.data) {
        this.setState({fetchMessages: ''})
        // Need to log in user and redirect to somewhere
      } else {
        this.setState({fetchMessages: json})
      }
    })
  }

  render () {
    return (
      <form className="card col-3 my-5 mx-auto p-3 rounded-lg" onSubmit={event => this.handleSubmit(event)}>
        <div className="form-group col-sm d-flex justify-content-center">
          <h3>Create Account</h3>
        </div>
        <div className="form-group col-sm">
          <input type="text" className="form-control" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group col-sm">
          <input type="text" className="form-control" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group col-sm">
          <input type="email" className="form-control" placeholder="Email Address" name="email" value={this.state.email} onChange={event => this.handleChange(event)}/>
        </div>
        <div className="form-group col-sm d-flex justify-content-center">
          <button type="submit" className="btn btn-success p">
            <i className="fas fa-user-plus"></i>
            <span className="d-none d-sm-none d-md-inline"> Create Account</span>
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

export default CreateAccount