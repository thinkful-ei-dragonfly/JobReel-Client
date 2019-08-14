import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <div className='link'>
          <Link to='/jobs'>SEARCH MY DREAM JOB</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/resources'>USEFUL RESOURCES</Link>
        </div>
        <br/>
        <div className='link'>
          <Link to='/jobs/interested'>JOBS THAT I LIKE</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/companies'>COMPANIES OF INTEREST</Link>
        </div>
        <br />
        <div className='link'>
          <Link to='/events'>NETWORKING EVENTS</Link>
        </div>
      </div>
    )
  }
}

export default NavBar;