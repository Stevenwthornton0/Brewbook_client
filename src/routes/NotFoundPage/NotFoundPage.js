import React, { Component } from 'react';
import './NotFoundPage.css';

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='NotFoundPage'>
        <h2 className='notFound'>404 - Page not found</h2>
        <p className='prevPage'>Try going back to your previous page.</p>
      </section>
    )
  }
}