import React, { Component } from 'react';
import BreweryListContext from '../../../contexts/BreweryListContext';
import BreweryList from './BreweryList/BreweryList';


class SearchResults extends Component {
    static contextType = BreweryListContext;

    render() {
        let content
        if (this.context.error) {
            content = <p>There is an error</p>
        } else if (!this.context.breweryList) {
            content = <p>Loading...</p>
        } else {
            content = 
                <div>
                    <h2>Results for {this.props.city}, {this.props.state}</h2>
                    <div className='breweryContainer'>
                        <BreweryList />
                    </div>
                </div>
        }
        return (
            <div>{content}</div>
        )
    }
}

export default SearchResults;