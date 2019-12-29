import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { displayPhone, displayWebsite_1 } from '../../../../../Utils/Utils';
import './BreweryItem.css'

class BreweryItem extends Component {


    render() {
        let { brewery } = this.props;
        return (
            <Link to={`/brewery/${brewery.id}`} className='brewery'>
                <section className='breweryItem'>
                    <h3>{brewery.name}</h3>
                    <div className='container1'>
                        <div className='container2'>
                            <p>{brewery.street}</p>
                            <p>{brewery.city}, {brewery.state}</p>
                        </div>
                        <div className='container3'>
                            {displayWebsite_1(brewery)}
                            {displayPhone(brewery)}
                        </div>
                    </div>
                </section>
            </Link>
        )
    }
}

export default BreweryItem;