import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service.js';

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    };

    state = { error: null };

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                console.log(this.props.onLoginSuccess())
            })
            .catch(res => {
                this.setState({ error: res.error })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <form
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert'>
                    {error && <p className='error'>{error}</p>}
                </div>
                <div className='user_name'>
                    <label htmlFor='LoginForm_user_name'>
                        User Name
                    </label>
                    <input
                        className='Input user_name'
                        required
                        name='user_name'
                        id='LoginForm_user_name'
                    />
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm_password'>
                        Password
                    </label>
                    <input
                        className='Input password'
                        required
                        name='password'
                        type='password'
                        id='LoginForm_passsword'
                    />
                </div>
                <button type='submit'>
                    Login
                </button>
            </form>
        )
    }
}