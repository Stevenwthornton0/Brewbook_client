import React, { Component } from 'react';

export const nullBrewery = {
    name: [],
}

const BreweryContext = React.createContext({
    brewery: nullBrewery,
    reviews: [],
    error: null,
    setError: () => {},
    setAdmin: () => {},
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
        error: null,
        isAdmin: false
    }

    setError = error => {
        this.setState({ error })
    }

    setAdmin = isAdmin => {
        this.setState({ isAdmin })
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
            isAdmin: this.state.isAdmin,
            setError: this.setError,
            setAdmin: this.setAdmin,
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