import React, { Component } from 'react';
import BreweriesApiService from '../../services/breweries-api-service';
import { States, toSnakeCase } from '../../Utils/Utils';
import BreweryListContext from '../../contexts/BreweryListContext';    
import SearchResults from './SearchResults/SearchResults';
import PaginationPage from '../PaginationPage/PaginationPage';
import LoaderSpinner from '../../Utils/LoaderSpinner';
import { Input, Button } from '../../Utils/Utils';
import './SearchBar.css';

class SearchBar extends Component {
    static contextType = BreweryListContext;

    constructor(props) {
        super(props);
        this.state = {
            renderList: null,
            waiting: false,
            page: 1,
            numResults: 0
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
                        res.forEach(brewery => 
                            listOfBreweries.push(brewery)
                        )
                        this.setState({
                            numResults: listOfBreweries.length,
                            maxPage: Math.ceil(listOfBreweries.length / 20),
                            waiting: false,
                            renderList: true
                        })
                        this.populatePages()
                    } else {
                        page = page + 1
                        res.forEach(brewery => {
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
        if (page === this.state.page) {
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

    populatePages = () => {
        let pages = [];
        let { maxPage } = this.state;

        const add = () => {
            if (maxPage < 1) {
                pages.sort(function(a, b){return a-b})
                this.context.setPages(pages)
            } else {
                pages.push(maxPage)
                maxPage = maxPage - 1
                add()
            }
        }

        add()
    }








    handleSubmit = ev => {
        ev.preventDefault()

        this.setState({ 
            renderList: false,
            waiting: true,
            page: 1,
            maxPage: 1
        })

        this.context.clearError()
        this.context.clearBreweryList()
        this.context.clearPages()
        
        let { city, state } = ev.target;
        let page = 1

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
    
    displayResults() {
        let content = 
            <div className='resultsContainer'>
                <SearchResults
                    city={this.state.city}
                    state={this.state.state}
                    numResults={this.state.numResults}
                />
                <PaginationPage 
                    maxPage={this.state.maxPage}
                    currentPage={this.state.page}
                    handlePrev={this.handlePrev}
                    handleNext={this.handleNext}
                    handlePagination={this.handlePagination}
                />
            </div>
            
        return content
    }

    displayLoading() {
        if (this.state.waiting) {
            return (
                <div className='loaderContainer'>
                    <LoaderSpinner />
                </div>
            )
        }
        return null
    }
    
    

    render() {
        return (
            <div className='mainContainer'>
                <div className='formContainer'>
                    <form 
                        className='SearchForm'
                        onSubmit={this.handleSubmit}
                    >
                        <div className='city'>
                            <label htmlFor='SearchForm_city'>
                                City
                            </label>
                            <Input
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
                        <Button type='submit'>
                            Search
                        </Button>
                    </form>
                </div>
                {this.state.renderList ? this.displayResults() : this.displayLoading()}
            </div>

        )
    }
}

export default SearchBar;