import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service.js';
import BreweryContext from '../../contexts/BreweryContext';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import { Button, Input } from '../../Utils/Utils';
import './LoginForm.css';

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            waiting: false,
        }
    }

    static defaultProps = {
        onLoginSuccess: () => {}
    };

    static contextType = BreweryContext;

    state = { error: null };

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ 
            error: null,
            waiting: true,
        })
        const { user_name, password } = ev.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                TokenService.saveUsername(user_name.value)
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.setState({ waiting: false })
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({ 
                    error: res.error,
                    waiting: false
                })
            })
    }

    render() {
        const { error } = this.state;
        return (
            <div>
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
                        <Input
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
                        <Input
                            className='Input password'
                            required
                            name='password'
                            type='password'
                            id='LoginForm_passsword'
                        />
                    </div>
                    <Button type='submit'>
                        Log in
                    </Button>
                </form>
                <div className='loaderContainer'>
                    {this.state.waiting ? <LoaderSpinner /> : null}
                </div>
            </div>
        )
    }
}