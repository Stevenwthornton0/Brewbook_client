import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { displayPhone, displayWebsite } from '../../../../../Utils/Utils';

class BreweryItem extends Component {


    render() {
        let { brewery } = this.props;
        return (
            <Link to={`/brewery/${brewery.id}`}>
                <section className='breweryItem'>
                    <h3>{brewery.name}</h3>
                    <p>{brewery.street}</p>
                    <p>{brewery.city}, {brewery.state}</p>
                    {displayPhone(brewery)}
                    {displayWebsite(brewery)}
                    <br></br>
                </section>
            </Link>
        )
    }
}

export default BreweryItem;