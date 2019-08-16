import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

class SideNav extends React.Component {
  render() {
    return (
      <div className="SideNav">
        <div className='link'>
          <Link to='/jobsearch'>SEARCH MY DREAM JOB</Link>
        </div>
          <br/>
        <div className='link'>
          <Link to='/saved-jobs'>JOBS THAT I LIKE</Link>
        </div>
          <br/>
        <div className='link'>
          <Link to='/companies'>COMPANIES OF INTEREST</Link>
        </div>
          <br/>
        <div className='link'>
          <Link to='/contacts'>PROFESSIONAL CONTACTS</Link>
        </div>
          <br/>
        <div className='link'>
          <Link to='/events'>NETWORKING EVENTS</Link>
        </div>
          <br/>
        <div className="link">
          <Link to='/resources'>USEFUL RESOURCES</Link>
        </div>
      </div>
    )
  }
}

export default SideNav;