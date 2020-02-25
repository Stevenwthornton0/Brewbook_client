import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import { Input, Button } from '../../Utils/Utils';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { 
        error: null,
        waiting: false 
    };

    
    toSnakeCase = function(string) {
      var s;
      s = string.replace(/[^\w\s]/g, "");
      s = s.replace(/\s+/g, " ");
      return s.toLowerCase().split(' ').join('_');
    };

    handleSubmit = ev => {
        ev.preventDefault()
        const { first_name, last_name, user_name, password } = ev.target;

        this.setState({ error: null, waiting: true });
        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            user_name: user_name.value,
            password: password.value,
            admin: 'false'
        })
            .then(user => {
                first_name.value = ''
                last_name.value = ''
                user_name.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
            })
            .catch(res => {
                this.setState({error: res.error })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <form
                className='RegistrationForm'
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    {error && <p>{error}</p>}
                </div>
                <div className='first_name'>
                    <label htmlFor='RegistrationForm_first-name'>
                        First Name
                    </label>
                    <Input
                        name='first_name'
                        type='text'
                        required
                        id='RegistrationForm_first-name'
                    />
                </div>
                <div className='last_name'>
                    <label htmlFor='RegistrationForm_last-name'>
                        Last Name
                    </label>
                    <Input
                        name='last_name'
                        type='text'
                        required
                        id='RegistrationForm_last-name'
                    />
                </div>
                <div className='user_name'>
                    <label htmlFor='RegistrationForm_user-name'>
                        User Name
                    </label>
                    <Input
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm_user-name'
                    />
                </div>
                <div className='password'>
                    <label htmlFor='RegistrationForm_password'>
                        Password
                    </label>
                    <Input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm_password'
                    />
                </div>
                <div className='requires'>
                    <p className='requires'>Requirements:</p>
                    <p>&bull; an uppercase letter</p>
                    <p>&bull; a lowercase letter</p>
                    <p>&bull; a number</p>
                    <p>&bull; a special character</p>
                </div>
                <Button type='submit'>
                    Register
                </Button>
                <div className='loaderContainer'>
                    {this.state.waiting ? <LoaderSpinner /> : null}
                </div>
            </form>
        )
    }
}