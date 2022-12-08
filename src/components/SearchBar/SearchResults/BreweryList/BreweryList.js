import React, { Component } from 'react';
import BreweryItem from './BreweryItem/BreweryItem';
import BreweryListContext from '../../../../contexts/BreweryListContext';

class BreweryList extends Component {
    static contextType = BreweryListContext;

    renderBreweries() {
        let { breweryList } = this.context
        breweryList = breweryList.filter(brewery => brewery.brewery_type !== 'planning')
            return breweryList.map(brewery => 
                <BreweryItem 
                    key={brewery.id}
                    brewery={brewery}
                />
            )
    }

    render() {
        return (
            <div>{this.renderBreweries()}</div>
        )
    }
}

export default BreweryList;