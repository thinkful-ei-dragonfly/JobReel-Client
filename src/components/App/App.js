import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
export default function App() {
  return (
      <div className='App'>
        <Header/>
        <main>
          <Switch>
            <Route
              path={'/'}
              component={RegistrationRoute}
            />
            <PublicOnlyRoute
             
            />
            <PrivateRoute
              
            />
          </Switch>
        </main>
        <Footer/>
      </div>
  );
}