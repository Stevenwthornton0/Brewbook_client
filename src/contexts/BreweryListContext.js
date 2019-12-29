import React, { Component } from 'react';

const BreweryListContext = React.createContext({
    breweryList: [],
    error: null,
    pages: [],
    setError: () => {},
    clearError: () => {},
    setBreweryList: () => {},
    clearBreweryList: () => {},
    setPages: () => {},
    clearPages: () => {}
})

export default BreweryListContext;

export class BreweryListProvider extends Component {
    state = {
        breweryList: [],
        error: null,
        pages: []
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

    setPages = (pages) => {
        this.setState({ pages })
    }

    clearPages = () => {
        this.setState({ pages: [] })
    }

    render() {
        const value = {
            breweryList: this.state.breweryList,
            error: this.state.error,
            pages: this.state.pages,
            setError: this.setError,
            clearError: this.clearError,
            setBreweryList: this.setBreweryList,
            clearBreweryList: this.clearBreweryList,
            setPages: this.setPages,
            clearPages: this.clearPages
        }

        return (
            <BreweryListContext.Provider value={value}>
                {this.props.children}
            </BreweryListContext.Provider>
        )
    }

}