import React, { Component } from 'react';
import BreweriesApiService from '../../services/breweries-api-service';
import { States, toSnakeCase } from '../../Utils/Utils';
import BreweryListContext from '../../contexts/BreweryListContext';    
import SearchResults from './SearchResults/SearchResults';
import PaginationPage from '../PaginationPage/PaginationPage';
import './SearchBar.css';

class SearchBar extends Component {
    static contextType = BreweryListContext;

    constructor(props) {
        super(props);
        this.state = {
            renderList: null,
            page: 1,
            maxPage: 1
        }
    }

    getNumOfPages = (city, state) => {
        const PAGE_SIZE = 20;
        let listOfBreweries = [];
        let page = 1;

        const fetch = () => {
            BreweriesApiService.getBreweries(city, state, page)
                .then(res => {
                    if (res.length < PAGE_SIZE) {
                        res.map(brewery => {
                            listOfBreweries.push(brewery)
                        })
                        this.setState({
                            maxPage: Math.ceil(listOfBreweries.length / 20),
                            renderList: true
                        })
                    } else {
                        page = page + 1
                        res.map(brewery => {
                            listOfBreweries.push(brewery)
                        })
                        fetch()
                    }
                })
        }

        fetch()
    }

    handlePrev = () => {
        let { page } = this.state

        if (page > 1) {
        this.setState({
            page: page - 1
        })
        let { city, state } = this.state;
        city = toSnakeCase(city);
        state = toSnakeCase(state);

        page = page - 1

        window.scrollTo(0, 0)
        BreweriesApiService.getBreweries(city, state, page)
            .then(this.context.setBreweryList)   
        } 
    }

    handleNext = () => {
        let { page } = this.state

        if (page < this.state.maxPage) {
        this.setState({
            page: page + 1
        })
        let { city, state } = this.state
        city = toSnakeCase(city);
        state = toSnakeCase(state);

        page = page + 1

        window.scrollTo(0, 0)
        BreweriesApiService.getBreweries(city, state, page)
            .then(this.context.setBreweryList)   
        } 
    }

    handlePagination = (page) => {
        console.log(this.state.page)
        if (page === this.state.page) {
            console.log('nope')
        } else {
            let { city, state } = this.state;
            city = toSnakeCase(city);
            state = toSnakeCase(state);

            window.scrollTo(0, 0)
            this.setState({
                page: page
            })

            BreweriesApiService.getBreweries(city, state, page)
                .then(res => {
                    this.context.setBreweryList(res)
                })   
        } 
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.context.clearError()
        let { city, state } = ev.target;
        let { page } = this.state

        this.getNumOfPages(city.value, state.value)

        this.setState({
            city: city.value,
            state: state.value
        })

        city = toSnakeCase(city.value);
        state = toSnakeCase(state.value);

        BreweriesApiService.getBreweries(city, state, page)
            .then(this.context.setBreweryList)
            .catch(this.context.setError)
    }

    handleClear = () => {
        this.context.clearBreweryList()
    }
    
    displayResults() {
        return (
            <div>
                <SearchResults
                    city={this.state.city}
                    state={this.state.state}
                />
                <PaginationPage 
                    maxPage={this.state.maxPage}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    handlePagination={this.handlePagination}
                />
            </div>
        )
    }

    

    render() {
        return (
            <div>
                <form 
                    className='SearchForm'
                    onSubmit={this.handleSubmit}
                >
                    <div className='city'>
                        <label htmlFor='SearchForm_city'>
                            City
                        </label>
                        <input
                            name='city'
                            type='text'
                            required
                            id='SearchForm_city'
                        />
                    </div>
                    <div className='state'>
                        <label htmlFor='SearchForm_state'>
                            State
                        </label>
                        <States />
                    </div>
                    <button type='submit'>
                        Search
                    </button>
                    <input type='reset'/>
                </form>
                {this.state.renderList ? this.displayResults() : null}
            </div>

        )
    }
}

export default SearchBar;