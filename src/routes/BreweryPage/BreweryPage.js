import React, { Component } from 'react';
import BreweriesApiService from '../../services/breweries-api-service';
import AuthApiService from '../../services/auth-api-service';
import BreweryContext from '../../contexts/BreweryContext';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { displayPhone, displayWebsite_2, displayType, displayDirections } from '../../Utils/Utils';
import './BreweryPage.css';
import config from '../../config';


class BreweryPage extends Component {
    static contextType = BreweryContext;

    constructor(props) {
        super(props)
        this.state = {
            brewery: [],
            reviews: [],
            display: false,
        }
    }

    static defaultProps = {
        match: { params: {} }
    }  

    deleteReview = (reviewId) => {
        const { breweryId } = this.props.match.params; 
        BreweriesApiService.deleteBreweryReview(breweryId, reviewId)
        BreweriesApiService.getBreweryReviews(breweryId)
            .then(this.context.setReviews)
    }

    breweryReviews({ reviews = [], isAdmin = false, deleteReview }) {
        if (reviews[0]) {
        return (
            <ul className='BreweryPage_reviews-list'>
                {reviews.map(review => 
                    <li key={review.id} className='BreweryPage_review'>
                        <p>Rating: {review.rating} Stars</p>
                        <p>"{review.text}"</p>
                        <p className='bold'>{review.user.first_name} {review.user.last_name}</p>
                        <div className='deleteContainer'>
                            {isAdmin && <button onClick={(e) => deleteReview(review.id)}>Delete</button>}
                        </div>
                    </li>    
                )}
            </ul>
        )}
        return (
            <p>No one has posted a review</p>
        )
    }

    componentDidMount() {
        const { breweryId } = this.props.match.params;
        AuthApiService.getUser(window.sessionStorage[config.USER_KEY])
            .then(user => this.context.setAdmin(user.admin))
        BreweriesApiService.getBreweryById(breweryId)
            .then(this.context.setBrewery)
        BreweriesApiService.getBreweryReviews(breweryId)
            .then(this.context.setReviews)
    }

    componentWillUnmount() {
        this.context.clearBrewery()
    }

    render() {
        const { brewery, reviews, error, isAdmin } = this.context
        let content
        if (error) {
            content = <p>There was an error</p>
        } else if (!brewery.name) {
            content = <p>Loading...</p>
        } else {
            content = 
            <div className='breweryPage'>
                <h1>{brewery.name}</h1>
            
                <div className='contact-container'>
                    {displayWebsite_2(brewery)}
                    {displayPhone(brewery)}
                    {displayType(brewery)}
                    {displayDirections(brewery)}
                </div>
                
                <h2>Reviews</h2>
                <this.breweryReviews reviews={reviews} isAdmin={isAdmin} deleteReview={this.deleteReview}/>

                <ReviewForm />
            </div>
        }
        return ( 
            <div>
                {content}
            </div> )
    }
}

export default BreweryPage;