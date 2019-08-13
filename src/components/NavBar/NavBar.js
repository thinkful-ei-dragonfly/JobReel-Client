import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Link to='/jobs'>SEARCH MY DREAM JOB</Link>
        <Link to='/resources'>USEFUL RESOURCES</Link>
        <Link to='/jobs/interested'>JOBS THAT I LIKE</Link>
        <Link to='/companies'>COMPANIES OF INTEREST</Link>
        <Link to='/events'>NETWORKING EVENTS</Link>
      </div>
    )
  }
}

export default NavBar;