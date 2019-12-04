import React, { Component } from 'react';

class Pagination extends Component {

    static defaultProps = {
        handlePagination: () => {}
    }
    
    render() {
        const page = this.props.page
        return (
            <button onClick={() => {this.props.handlePagination(page)}}>{page}</button>
        )
    }
}

export default Pagination;

