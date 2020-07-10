import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="jumbotron rounded-lg col-6 py-5 mt-5 bg-white mx-auto text-center">
            <h1 className="display-4"><i className="fas fa-fist-raised"></i> Welcome to Flatiorn Fight <i className="fas fa-fist-raised"></i> </h1>
            <p className="lead">The arena is the only place where a Flatiorn student can prove they have what it really takes to make it as a software engineer. Battle against your fellow classmates to see who can take on the instructors!</p>
            <hr className="my-4"/>
            <p>Join the battle, prove yourself!</p>
            <Link exact to="/create-account" title="Create Account">
                <button className="btn btn-primary btn-lg mx-4" type="button">
                    <i className="fas fa-user-plus"></i>
                    <span className="d-none d-sm-none d-md-inline"> Create Account</span>
                </button>
            </Link>
            <Link exact to="/new-game" title="New Game">
                <button className="btn btn-secondary btn-lg mx-4" type="button">
                    <i className="fas fa-gamepad"></i>
                    <span className="d-none d-sm-none d-md-inline"> New Game</span>
                </button>
            </Link>
        </div>
    )
}

export default About