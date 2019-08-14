import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  render() {
    return (
      <div className="SideNav">
        <Link to='/jobs'>SEARCH MY DREAM JOB</Link>
        <Link to='/jobs/interested'>JOBS THAT I LIKE</Link>
        <Link to='/companies'>COMPANIES OF INTEREST</Link>
        <Link to='/contacts'>PROFESSIONAL CONTACTS</Link>
        <Link to='/events'>NETWORKING EVENTS</Link>
        <Link to='/resources'>USEFUL RESOURCES</Link>
      </div>
    )
  }
}

export default SideNav;