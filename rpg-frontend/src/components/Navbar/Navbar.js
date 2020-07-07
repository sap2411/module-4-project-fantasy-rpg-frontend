import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="navbar navbar-expand navbar-dark bg-primary shadow flex-column flex-md-row bd-navbar">
            <nav class="collapse navbar-collapse" >
                <a class="navbar-brand" title="Flatiron Fight" href="#">
                    <i class="fas fa-fist-raised"></i>
                    <span class="d-none d-sm-none d-md-inline"> Flatiron Fight</span>
                </a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" title="New Game" href="#">
                            <i class="fas fa-gamepad"></i>
                            <span class="d-none d-sm-none d-md-inline"> New Game</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" title="Load Game" href="#">
                            <i class="fas fa-save"></i>
                            <span class="d-none d-sm-none d-md-inline"> Load Game</span>
                        </a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item">
                        <a class="nav-link" title="Create Account" href="#">
                            <i class="fas fa-user-plus"></i>
                            <span class="d-none d-sm-none d-md-inline"> Create Account</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" title="Login" href="#">
                            <i class="fas fa-sign-in-alt"></i>
                            <span class="d-none d-sm-none d-md-inline"> Login</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" title="User Name" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user-circle"></i>
                            <span class="d-none d-sm-none d-md-inline"> User Name</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#"><i class="fas fa-address-card"></i> Account</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar