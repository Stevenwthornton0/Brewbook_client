import config from '../config';

const AuthApiService = {
    postLogin(credentials) {
    // user login
        return fetch(`${config.USER_API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(credentials),
        })
            .then(res => 
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    postUser(user) {
    // registers user to database
        return fetch(`${config.USER_API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
    },

    getUser(user_name) {
    // gets data for user in database based on username
        return fetch(`${config.USER_API_ENDPOINT}/users/${user_name}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => 
                (!res.ok)  
                    ? res.json().then(e => Promise.reject(e))  
                    : res.json()
            )
    }
}

export default AuthApiService;