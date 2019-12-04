import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';

export default class Header extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='header_logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                    Logout
                </Link>     
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='header_logged-out'>
                <Link to='/register'>
                    Register
                </Link>
                {' - '}
                <Link to='/login'>
                    Login
                </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header'>
                <h1>
                    <Link to='/'>
                        <FontAwesomeIcon className='logo' icon='beer' />
                        {' '}
                        brewbook
                    </Link>
                </h1>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </nav>
        )
    }
}