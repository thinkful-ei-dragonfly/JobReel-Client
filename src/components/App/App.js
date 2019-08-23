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
import SavedEventsRoute from '../../routes/SavedEventsRoute/SavedEventsRoute';
import SavedCompaniesRoute from '../../routes/SavedCompaniesRoute/SavedCompaniesRoute';
import JobsRoute from '../../routes/JobsRoute/JobsRoute'
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import EventBrite from '../EventBrite/EventBrite';
import SavedContactsRoute from '../../routes/SavedContactsRoute/SavedContactsRoute';
import FindProfessionalsForm from '../FindProfessionalsForm/FindProfessionalsForm'
import FindContactsRoute from '../../routes/FindContactsRoute/FindContacts';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
        <PrivateRoute
            path={'/professionalsearch'}
            component={FindProfessionalsForm}
          />
        <PrivateRoute
            path={'/findcontacts'}
            component={FindContactsRoute}
          />
          <PrivateRoute
            path={'/eventbrite'}
            component={EventBrite}
          />
          <PrivateRoute
            path={'/jobsearch'}
            component={JobSearcForm}
          />
          <PublicOnlyRoute
            exact path={['/','/register']}
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
            path={'/jobslist'}
            component={JobsRoute}
          />
          <PrivateRoute
            path={'/saved-jobs'}
            component={SavedJobsRoute}
          />
          <PrivateRoute
            path={'/saved-events'}
            component={SavedEventsRoute}
          />
          <PrivateRoute
            path={'/jobs'}
            component={JobSearchForm}
          />
          <PrivateRoute
            path={'/companies'}
            component={SavedCompaniesRoute}
          />
          <PrivateRoute
            path={'/contacts'}
            component={SavedContactsRoute}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}