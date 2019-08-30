import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';
import EventBriteButton from '../EventBriteButton/EventBriteButton';

class TopNav extends React.Component {
  render() {
    return (
      <div className="TopNav">
        <div className='topLink'>
          <Link to='/jobsearch'>Search Jobs</Link>
        </div>
        <div className='topLink'>
          <Link to='/saved-jobs'>Saved Jobs</Link>
        </div>
        <div className='topLink'>
          <EventBriteButton/>
        </div>
        <div className='topLink'>
          <Link to='/saved-events'>Saved Events</Link>
        </div>
        <div className='topLink'>
          <Link to='/professionalsearch'>Search Contacts</Link>
        </div>
        <div className='topLink'>
          <Link to='/contacts'>Saved Contacts</Link>
        </div>
        <div className='topLink'>
          <Link to='/companies'>Saved Companies</Link>
        </div>
        <div className="topLink">
          <Link to='/resources'>Saved Resources</Link>
        </div>
      </div>
    )
  }
}

export default TopNav;