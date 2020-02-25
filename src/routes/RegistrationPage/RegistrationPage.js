import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegistrationPage.css'

class RegistrationPage extends Component {
    static defaultProps = {
        histor: {
            push: () => {}
        }
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props;
        history.push('/')
    }

    render() {
        return (
            <section className='registrationPage'>
                <h2>Register</h2>
                <RegistrationForm 
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </section>
        )
    }
}

export default RegistrationPage;