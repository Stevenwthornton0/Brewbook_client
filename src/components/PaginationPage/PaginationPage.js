import React, { Component } from 'react';
import Pagination from './Pagination/Pagination';

class PaginationPage extends Component {
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
        handleNext: () => {}
    }

    componentDidMount() {
        let pages = [];
        let maxPage = this.props.maxPage;

        const add = () => {
            if (maxPage < 1) {
                pages.sort(function(a, b){return a-b})
                this.setState({
                    pages: pages,
                    renderPagination: true
                })
            } else {
                pages.push(maxPage)
                maxPage = maxPage - 1
                add()
            }
        }

        add()
    }
    

    createPagination = () => {
        const paginationPage = () => {
            const pages = this.state.pages
            return pages.map(page => 
                <Pagination 
                    key={page}
                    page={page}
                    handlePagination={this.props.handlePagination}
                />
            )
        }

        return (
            <div className='pagination-container'>
                <button onClick={() => {this.props.handlePrev()}}>prev</button>
                {paginationPage()}
                <button onClick={() => {this.props.handleNext()}}>next</button>
            </div>
        )

    }
    
    render() {  
        return (
            <div>
                {this.state.renderPagination ? this.createPagination() : null}
            </div>
        )
    }
}

export default PaginationPage;