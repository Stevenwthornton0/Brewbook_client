import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginToSee extends Component {
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
            <section className='loginPage'>
                <h2>Login <span className='smaller'>to view full brewery details</span></h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </section>
        )
    }
}

export default LoginToSee;