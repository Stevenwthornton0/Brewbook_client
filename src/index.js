import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BreweryListProvider } from './contexts/BreweryListContext';
import { BreweryProvider } from './contexts/BreweryContext';
import App from './components/App/App';
import { faBeer, faPhone, faMouse } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './index.css';

library.add(
    faBeer,
    faPhone,
    faMouse,
)

ReactDOM.render(
    <BrowserRouter>
        <BreweryListProvider>
            <BreweryProvider>
                <App />
            </BreweryProvider>
        </BreweryListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);