import React, { Component } from 'react';
import BreweriesApiService from '../../services/breweries-api-service';
import BreweryContext from '../../contexts/BreweryContext';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import { displayPhone, displayWebsite } from '../../Utils/Utils';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import './BreweryPage.css';


class BreweryPage extends Component {
    static contextType = BreweryContext;

    constructor(props) {
        super(props)
        this.state = {
            brewery: [],
            reviews: [],
            display: false
        }
    }

    static defaultProps = {
        match: { params: {} }
    }  

    displayMap(latitude, longitude) {
        if (longitude && latitude) {
            return (
                <GoogleMap 
                    latitude={latitude}
                    longitude={longitude}
                /> 
            )
        }
    }

    breweryReviews({ reviews = [] }) {
        return (
            <ul className='BreweryPage_reviews-list'>
                {reviews.map(review => 
                    <li key={review.id} className='BreweryPage_review'>
                        <p>Rating: {review.rating} out of 5</p>
                        <p>"{review.text}"</p>
                        <p>- {review.user.first_name} {review.user.last_name}</p>
                    </li>    
                )}
            </ul>
        )
    }

    componentDidMount() {
        const { breweryId } = this.props.match.params;
        BreweriesApiService.getBreweryById(breweryId)
            .then(this.context.setBrewery)
        BreweriesApiService.getBreweryReviews(breweryId)
            .then(this.context.setReviews)
    }

    componentWillUnmount() {
        this.context.clearBrewery()
    }

    render() {
        const { brewery, reviews, error } = this.context
        let content
        if (error) {
            content = <p>There was an error</p>
        } else if (!brewery.name) {
            content = <p>Loading...</p>
        } else {
            content = 
            <div>
                <h1>{brewery.name}</h1>
                
                {/* {this.displayMap(brewery.latitude, brewery.longitude)} */}
                <div className='contact-container'>
                    {displayPhone(brewery)}
                    {displayWebsite(brewery)}
                </div>
                
                <this.breweryReviews reviews={reviews} />

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