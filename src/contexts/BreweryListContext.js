import React, { Component } from 'react';

const BreweryListContext = React.createContext({
    breweryList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBreweryList: () => {},
})

export default BreweryListContext;

export class BreweryListProvider extends Component {
    state = {
        breweryList: [],
        error: null
    };

    setBreweryList = breweryList => {
        this.setState({ breweryList })
    }

    clearBreweryList = () => {
        this.setState({ breweryList: [] })
    }

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = error => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            breweryList: this.state.breweryList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBreweryList: this.setBreweryList,
            clearBreweryList: this.clearBreweryList
        }

        return (
            <BreweryListContext.Provider value={value}>
                {this.props.children}
            </BreweryListContext.Provider>
        )
    }

}