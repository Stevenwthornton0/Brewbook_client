import React, { Component } from 'react';
import BreweryListContext from '../../contexts/BreweryListContext';
import Pagination from './Pagination/Pagination';
import './PaginationPage.css'

class PaginationPage extends Component {
    static contextType = BreweryListContext;

    constructor(props) {
        super(props)
        this.state = {
            renderPagination: null,
            pages: []
        }  
    }

    static defaultProps = {
        handlePagination: () => {},
        handlePrev: () => {},
        handleNext: () => {},
        currentPage: 1
    }

    componentDidMount() {
        this.setState({
            renderPagination: true
        })
    }


    createPagination = () => {
        const { maxPage, currentPage } = this.props;
        const paginationPage = () => {
            const { pages } = this.context;
            return pages.map(page => 
                <Pagination
                    currentPage={this.props.currentPage} 
                    key={page}
                    page={page}
                    handlePagination={this.props.handlePagination}
                />
            )
        }
        
        if (maxPage === 1 || maxPage === 0) {
            return null
        }
        
        if (currentPage === 1) {
            return (
                <div className='pagination'>
                    <button className='left disabled' disabled={true}>prev</button>
                    {paginationPage()}
                    <button className='right' onClick={() => {this.props.handleNext()}}>next</button>
                </div>
            )

        } else if (currentPage === maxPage) {
            return (
                <div className='pagination'>
                    <button className='left' onClick={() => {this.props.handlePrev()}}>prev</button>
                    {paginationPage()}
                    <button className='right disabled' disabled={true}>next</button>
                </div>
            )
        }

        return (
            <div className='pagination'>
                <button className='left' onClick={() => {this.props.handlePrev()}}>prev</button>
                {paginationPage()}
                <button className='right' onClick={() => {this.props.handleNext()}}>next</button>
            </div>
        )

    }
    
    render() {
        return (
            <div className='paginationContainer'>
                {this.state.renderPagination ? this.createPagination() : null}
            </div>
        )
    }
}

export default PaginationPage;

// creates a pagination based on the amount of pages and responses to a search