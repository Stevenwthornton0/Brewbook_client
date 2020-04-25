import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        }
    }
    
    handleLoginSuccess = () => {
        const { location, history } = this.props;
        const destination = (location.state || {}).from || '/';
        history.push(destination)
        window.location.reload();
    }

    render() {
        return (
            <section>
                <div className='loginPage'>
                    <h2>Login</h2>
                    <LoginForm
                        onLoginSuccess={this.handleLoginSuccess}
                    />
                </div>

                <div className='demoUser'>
                    <h3 clasName='bold'>Demo User</h3>
                    <p>Username: dunder</p>
                    <p>Password: password</p>
                    <p>This account is an admin and will allow greater function within the app.</p>
                </div>
            </section>
        )
    }
}

export default LoginPage;