import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import { States } from '../../Utils/Utils';

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null };

    
    toSnakeCase = function(string) {
      var s;
      s = string.replace(/[^\w\s]/g, "");
      s = s.replace(/\s+/g, " ");
      return s.toLowerCase().split(' ').join('_');
    };

    handleSubmit = ev => {
        ev.preventDefault()
        const { first_name, last_name, user_name, password, city, state } = ev.target;
        console.log(first_name.value)

        this.setState({ error: null });
        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            user_name: user_name.value,
            password: password.value,
            city: city.value,
            state: this.toSnakeCase(state.value)
        })
            .then(user => {
                first_name.value = ''
                last_name.value = ''
                user_name.value = ''
                password.value = ''
                city.value = ''
                state.value = ''
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
                    <input
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
                    <input
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
                    <input
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
                    <input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm_password'
                    />
                </div>
                <div className='city'>
                    <label htmlFor='RegistrationForm_city'>
                        City
                    </label>
                    <input
                        name='city'
                        type='text'
                        required
                        id='RegistrationForm_city'
                    />
                </div>
                <div className='state'>
                    <label htmlFor='RegistrationForm_state'>
                        State
                    </label>
                    <States />
                </div>
                <button type='submit'>
                    Register
                </button>
            </form>
        )
    }
}