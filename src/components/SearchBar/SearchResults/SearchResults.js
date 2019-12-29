import React, { Component } from 'react';
import BreweryListContext from '../../../contexts/BreweryListContext';
import BreweryList from './BreweryList/BreweryList';
import './SearchResults.css';


class SearchResults extends Component {
    static contextType = BreweryListContext;

    static defaultProps = {
        numResults: 0
    }

    render() {
        const { numResults } = this.props;
        let content
        if (this.context.error) {
            content = <p>There is an error</p>
        } else {
            content = 
                <div className='SearchResults'>
                    <h2>{numResults} Results for {this.props.city}, {this.props.state}</h2>
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

