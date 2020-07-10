import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

class AccountForm extends Component {

    state = {
        first_name: this.props.user ? this.props.user.attributes.first_name : '',
        last_name: this.props.user ? this.props.user.attributes.last_name : '',
        email: this.props.user ? this.props.user.attributes.email : '',
        fetchMessages: '',
        redirect: null
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.user ? this.editUser(this.state) : this.createNewUser(this.state)
    }

    handleDeleteClick = () => {
        this.deleteUser()
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    createNewUser = user => {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch(this.props.usersURL, options)
        .then(resp => resp.json())
        .then(this.handleFetchResponse)
    }
    
    editUser = user => {
        const options = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch(this.props.usersURL + '/' + this.props.user.id, options)
        .then(resp => resp.json())
        .then(this.handleFetchResponse)
    }

    deleteUser = () => {
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }
        fetch(this.props.usersURL + '/' + this.props.user.id, options)
        .then(resp => resp.json())
        .then(this.handleFetchResponse)
    }

    handleFetchResponse = response => {
        if (response.errors) {
            // Set error messages
            this.setState({fetchMessages: response.errors})
        } else if (response.deleted) {
            // Redirect via state update
            this.setState({redirect: '/create-account'})
            // Fake log out user
            this.props.logOut()
            // redirect....
        } else {
            // Redirect via state update
            this.setState({redirect: '/new-game'})
            // Fake log in user
            console.log(response.data.attributes)
            this.props.logIn(response.data.attributes.email)
        }
    }

    render () {
        // Redirect function used after form submit
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="card col-3 my-5 mx-auto px-0 rounded-lg text-center">
                <form className="card-body" onSubmit={event => this.handleSubmit(event)}>
                    <div className="form-group col-sm">
                        <h3>{this.props.user ? 'Edit' : 'Create'} Account</h3>
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

                    {/* Conditionally render via && operator acting as if statement */}
                    { this.props.user &&
                        <div className="form-group col-sm">
                            <button type="button" className="btn btn-block btn-danger" onClick={this.handleDeleteClick}>
                                <i className="fas fa-trash-alt"></i>
                                <span className="d-none d-sm-none d-md-inline"> Delete Account</span>
                            </button>
                        </div>
                    }

                    <div className="form-group col-sm">
                        <button type="submit" className="btn btn-block btn-success p">
                            {this.props.user ? <i className="fas fa-user-edit"></i> : <i className="fas fa-user-plus"></i>}
                            <span className="d-none d-sm-none d-md-inline"> {this.props.user ? 'Edit' : 'Create'} Account</span>
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

                {/* Conditionally render via && operator acting as if statement */}
                { this.props.user &&
                    <div className="card-footer text-muted row">
                        <span className="col" >Created: {new Date(this.props.user.attributes.created_at).toLocaleDateString()}</span>
                        <span className="col" >Updated: {new Date(this.props.user.attributes.updated_at).toLocaleDateString()}</span>
                    </div>
                }
            </div>
        )
    }
}

export default AccountForm