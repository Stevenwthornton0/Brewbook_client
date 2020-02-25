import React, { Component } from 'react';

class Pagination extends Component {

    static defaultProps = {
        handlePagination: () => {}
    }
    
    render() {
        const { page, currentPage } = this.props

        if (page === currentPage) {
            return ( <button className='disabled' disabled={true}>{page}</button> )
        }

        return (
            <button onClick={() => {this.props.handlePagination(page)}}>{page}</button>
        )
    }
}

export default Pagination;

