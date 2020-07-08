import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="navbar navbar-expand navbar-dark bg-primary shadow flex-column flex-md-row bd-navbar">
            <nav class="collapse navbar-collapse" >
                <NavLink exact to="/" className="navbar-brand" title="Flatiron Fight">
                    <i class="fas fa-fist-raised"></i>
                    <span class="d-none d-sm-none d-md-inline"> Flatiron Fight</span>
                </NavLink>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <NavLink exact to="/character-select" className="nav-link" title="New Game">
                            <i class="fas fa-gamepad"></i>
                            <span class="d-none d-sm-none d-md-inline"> New Game</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/load-game" className="nav-link" title="Load Game">
                            <i class="fas fa-save"></i>
                            <span class="d-none d-sm-none d-md-inline"> Load Game</span>
                        </NavLink>
                    </li>
                </ul>

                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item">
                        <NavLink exact to="/create-account" className="nav-link" title="Create Account">
                            <i class="fas fa-user-plus"></i>
                            <span class="d-none d-sm-none d-md-inline"> Create Account</span>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink exact to="/login" className="nav-link" title="Login">
                            <i class="fas fa-sign-in-alt"></i>
                            <span class="d-none d-sm-none d-md-inline"> Login</span>
                        </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <NavLink exact to="/account" className="nav-link dropdown-toggle" title="User Name" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user-circle"></i>
                            <span class="d-none d-sm-none d-md-inline"> User Name</span>
                        </NavLink>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <NavLink exact to="/account" className="dropdown-item" ><i class="fas fa-address-card"></i> Account</NavLink>
                            <div class="dropdown-divider"></div>
                            <NavLink exact to="/logout" className="dropdown-item"><i class="fas fa-sign-out-alt"></i> Logout</NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar