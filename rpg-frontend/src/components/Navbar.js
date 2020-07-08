import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = ({user, logOut}) => {
    return (
        <header className="navbar navbar-expand navbar-dark bg-primary shadow flex-column flex-md-row bd-navbar">
            <nav className="collapse navbar-collapse" >
                <NavLink exact to="/" className="navbar-brand" title="Flatiron Fight">
                    <i className="fas fa-fist-raised"></i>
                    <span className="d-none d-sm-none d-md-inline"> Flatiron Fight</span>
                </NavLink>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact to="/new-game" className="nav-link" title="New Game">
                            <i className="fas fa-gamepad"></i>
                            <span className="d-none d-sm-none d-md-inline"> New Game</span>
                        </NavLink>
                    </li>
                    {/* Conditionally render based on user prop*/}
                    { user &&
                        <li className="nav-item">
                            <NavLink exact to="/load-game" className="nav-link" title="Load Game">
                                <i className="fas fa-save"></i>
                                <span className="d-none d-sm-none d-md-inline"> Load Game</span>
                            </NavLink>
                        </li>
                    }

                </ul>

                <ul className="navbar-nav ml-md-auto">
                    {/* Conditionally render based on user prop*/}
                    { !user &&
                    <Fragment>
                            <li className="nav-item">
                                <NavLink exact to="/create-account" className="nav-link" title="Create Account">
                                    <i className="fas fa-user-plus"></i>
                                    <span className="d-none d-sm-none d-md-inline"> Create Account</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/log-in" className="nav-link" title="Login">
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span className="d-none d-sm-none d-md-inline"> Login</span>
                                </NavLink>
                            </li>
                        </Fragment>
                    }

                    {/* Conditionally render based on user prop*/}
                    { user &&
                        <li className="nav-item dropdown">
                            <NavLink exact to="/account" className="nav-link dropdown-toggle" title="User Name" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user-circle"></i>
                                <span className="d-none d-sm-none d-md-inline"> User Name</span>
                            </NavLink>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <NavLink exact to="/account" className="dropdown-item" ><i className="fas fa-address-card"></i> Account</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink exact to="/log-out" className="dropdown-item" onClick={logOut}><i className="fas fa-sign-out-alt"></i> Logout</NavLink>
                            </div>
                        </li>
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Navbar