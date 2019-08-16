import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import RegistrationRoute from '../../routes/RegistrationRoute/RegistrationRoute'
import './App.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoginRoute from '../../routes/LoginRoute/LoginRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import JobSearcForm from '../JobSearchForm/JobSearchForm';
import SavedJobsRoute from '../../routes/SavedJobsRoute/SavedJobsRoute';
import JobsList from '../JobsList/JobsList';
import JobSearchForm from '../JobSearchForm/JobSearchForm';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
<<<<<<< HEAD
          <PrivateRoute
            exact path={'/jobsearch'}
            component={JobSearcForm}
          />
=======
>>>>>>> 477d38a092de0fa607c873235588beab1b9f18d1
          <PublicOnlyRoute
            exact path={'/'}
            component={RegistrationRoute}
          />
          <PublicOnlyRoute
            path={'/login'}
            component={LoginRoute}
          />
          <PrivateRoute
            path={'/dashboard'}
            component={DashboardRoute}
          />
          <PrivateRoute
            path={'/jobsearch/results'}
            component={JobsList}
          />
          <PrivateRoute
            path={'/saved-jobs'}
            component={SavedJobsRoute}
          />
          <PrivateRoute
            path={'/jobs'}
            component={JobSearchForm}
          />
          <PrivateRoute
            exact path={'/JobsList'}
            component={JobsList}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}