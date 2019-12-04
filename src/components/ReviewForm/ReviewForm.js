import React, { Component } from 'react';
import BreweryContext from '../../contexts/BreweryContext';
import BreweriesApiService from '../../services/breweries-api-service';

export default class ReviewForm extends Component {
    static contextType = BreweryContext;

    handleSubmit = ev => {
        ev.preventDefault()
        const { brewery } = this.context;
        const { rating, text } = ev.target;
        BreweriesApiService.postReview(brewery.id, rating.value, text.value)
            .then(this.context.addReview)
            .then(() => {
                text.value = ''
            })
            .catch(this.context.setError)
    }

    render() {
        return (
            <div>
                <h2>Post a Review</h2>
                <form
                    className='ReviewForm'
                    onSubmit={this.handleSubmit}
                >
                    <label>Rating</label>
                    <select id='rating' name='rating'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <label>Review</label>
                    <input 
                        required
                        aria-label='Leave a review...'
                        name='text'
                        id='text'
                        cols='30'
                        rows='3'
                        placeholder='Leave a review..'
                    />

                    <button type='submit'>
                        Post Review
                    </button>

                </form>
            </div>
        )
    }
}