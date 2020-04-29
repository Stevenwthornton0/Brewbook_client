import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/header';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';
import PrivateOnlyRoute from '../../Utils/PrivateOnlyRoute';
import ReviewsListPage from '../../routes/ReviewsListPage/ReviewsListPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import BreweryPage from '../../routes/BreweryPage/BreweryPage';
import LoginToSee from '../../routes/LoginToSee/LoginToSee';
import FrontPage from '../../routes/FrontPage/FrontPage';
import './App.css';


class App extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }
  
  render() {
    return (
      <div className='App'>

        <header className='Header'>
          <Header />
        </header>

        <main className='App_main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={FrontPage}
            />

            <Route
              path={'/search'}
              component={ReviewsListPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/loginfirst'}
              component={LoginToSee}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateOnlyRoute 
              path={'/brewery/:breweryId'}
              component={BreweryPage}
            />

            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
        
      </div>
    )
  }
}

export default App;