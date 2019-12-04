import React, { Component } from 'react';
import SearchBar from '../../components/ReviewsList/SearchBar/SearchBar';
import './ReviewsListPage.css'

class ReviewsListPage extends Component {
    render() {
        return (
            <div className='searchForm'>
                <SearchBar />
            </div>
        )
    }
}

export default ReviewsListPage;