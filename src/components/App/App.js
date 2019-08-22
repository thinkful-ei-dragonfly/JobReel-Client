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
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import SavedJobsRoute from '../../routes/SavedJobsRoute/SavedJobsRoute';
import SavedEventsRoute from '../../routes/SavedEventsRoute/SavedEventsRoute';
import SavedCompaniesRoute from '../../routes/SavedCompaniesRoute/SavedCompaniesRoute';
import JobsList from '../JobsList/JobsList';
import ResourcesRoute from '../../routes/ResourcesRoute/ResourcesRoute';
import SavedContactsRoute from '../../routes/SavedContactsRoute/SavedContactsRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronLeft, faTimesCircle, faCompressArrowsAlt, faExpandArrowsAlt, faLocationArrow, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import MeetupSender from '../Meetup/MeetupSender';
import SendToMeetup from '../Meetup/MeetupSender';


library.add(fab, faChevronLeft, faTimesCircle, faCompressArrowsAlt, faExpandArrowsAlt, faLocationArrow, faSuitcase);

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <PrivateRoute
            exact path={'/meetups'}
            component={SendToMeetup}
          />
          <PrivateRoute
            exact path={'/jobsearch'}
            component={JobSearchForm}
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
            path={'/jobsearch/results'}
            component={JobsList}
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
            exact path={'/JobsList'}
            component={JobsList}
          />
          <PrivateRoute
            path={'/companies'}
            component={SavedCompaniesRoute}
          />
          <PrivateRoute
            path={'/resources'}
            component={ResourcesRoute}
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