import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import EventBriteButton from '../EventBriteButton/EventBriteButton';

class SideNav extends React.Component {
  render() {
    return (
      <div className="SideNav">
        <div className='link'>
          <Link to='/jobsearch'>Search Jobs</Link>
        </div>
        <br />
        <div className='link'>
          <EventBriteButton/>
        </div>
        <br />
        <div className='link'>
          <Link to='/professionalsearch'>Search Contacts</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/saved-jobs'>My Saved Jobs</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/saved-events'>My Saved Events</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/contacts'>My Saved Contacts</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/companies'>My Saved Companies</Link>
        </div>
        <br />
        <div className="link">
          <Link to='/resources'>My Saved Resources</Link>
        </div>
      </div>
    )
  }
}

export default SideNav;