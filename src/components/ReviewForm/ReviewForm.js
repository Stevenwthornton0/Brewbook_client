import React, { Component } from 'react';
import BreweryContext from '../../contexts/BreweryContext';
import BreweriesApiService from '../../services/breweries-api-service';
import { Textarea, Button } from '../../Utils/Utils';
import './ReviewForm.css'

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
                <h3>Post a Review</h3>
                <form
                    className='ReviewForm'
                    onSubmit={this.handleSubmit}
                >
                    <label>Rating</label>
                    <select id='rating' className='rating'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>

                    <label>Review</label>
                    <Textarea
                        required
                        aria-label='Leave a review...'
                        className='reviewText'
                        id='text'
                        cols='30'
                        rows='4'
                        placeholder='Leave a review..'
                    ></Textarea>

                    <Button type='submit'>
                        Post
                    </Button>

                </form>
            </div>
        )
    }
}