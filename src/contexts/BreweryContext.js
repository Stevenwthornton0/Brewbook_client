import React, { Component } from 'react';

export const nullBrewery = {
    name: [],
}

const BreweryContext = React.createContext({
    brewery: nullBrewery,
    reviews: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBrewery: () => {},
    clearBrewery: () => {},
    setReviews: () => {},
    addReview: () => {}
})

export default BreweryContext;

export class BreweryProvider extends Component {
    state = {
        brewery: nullBrewery,
        error: null
    }

    setError = error => {
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBrewery = brewery => {
        this.setState({ brewery })
    }

    setReviews = reviews => {
        this.setState({ reviews })
    }

    clearBrewery = () => {
        this.setBrewery(nullBrewery)
        this.setReviews([])
    }

    addReview = review => {
        this.setReviews([
            ...this.state.reviews,
            review
        ])
    }

    render() {
        const value = {
            brewery: this.state.brewery,
            reviews: this.state.reviews,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBrewery: this.setBrewery,
            setReviews: this.setReviews,
            clearBrewery: this.clearBrewery,
            addReview: this.addReview
        }

        return (
            <BreweryContext.Provider value={value}>
                {this.props.children}
            </BreweryContext.Provider>
        )
    }
}