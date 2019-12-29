import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import './ReviewsListPage.css'

class ReviewsListPage extends Component {
    render() {
        return (
            <div className='searchForm'>
                <h2>Search for a brewery</h2>
                <SearchBar />
            </div>
        )
    }
}

export default ReviewsListPage;