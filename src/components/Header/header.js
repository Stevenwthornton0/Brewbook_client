import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hyph } from '../../Utils/Utils';
import './header.css';

export default class Header extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        window.location.reload()
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
                <Hyph/>
                <Link to='/login'>
                    Login
                </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='header'>
                <div className='header_container'>
                    <Link to='/' className='logo'>
                        <h1>
                            <FontAwesomeIcon className='logo' icon='beer' />
                            {' '}
                            brewbook
                        </h1>
                    </Link>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()}
                </div>
            </nav>
        )
    }
}

// displays navigation to registration and login/logout