import config from '../config';
import TokenService from './token-service';

const BreweriesApiService = {
    getBreweries(city, state, page) {
    // lists all breweries according to queried search
        return fetch(`${config.BEER_API_ENDPOINT}?by_state=${state}&by_city=${city}&page=${page}`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getBreweryById(breweryId) {
    // lists data for specific brewery by id
        return fetch(`${config.BEER_API_ENDPOINT}/${breweryId}`, {
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    getBreweryReviews(breweryId) {
    // lists reviews for brewery based on id
        return fetch(`${config.USER_API_ENDPOINT}/reviews/${breweryId}`, {
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    deleteBreweryReview(breweryId, reviewId) {
    // deletes review from database
        return fetch(`${config.USER_API_ENDPOINT}/reviews/${breweryId}/${reviewId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
    },

    postReview(breweryId, rating, text) {
    // adds review to database
        return fetch(`${config.USER_API_ENDPOINT}/reviews`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                brewery_id: breweryId,
                rating,
                text
            }),
        })
            .then(res => 
                (!res.ok)
                    ? res.json(e => Promise.reject(e))
                    : res.json()    
            )
    }
}

export default BreweriesApiService;