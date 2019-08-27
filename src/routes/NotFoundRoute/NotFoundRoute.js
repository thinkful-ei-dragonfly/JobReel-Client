import React from 'react';
import './NotFoundRoute.css';
import astronaut from '../../assests/astronaut-ingravity.svg';
import { Link } from 'react-router-dom'
import logo from '../../assests/jobreellogo200.png'

export default class NotFoundRoute extends React.Component{

  render(){
    return(
      <div>
      <section className="notfound">
        <div className='wrapper'>
          <div className='description-title'>
            <h4>Wooow there, Astronaut.
              <br/>
              Stop right there</h4>
          </div>
          <div className='description'>
            <h4>Welcome to the <em>OUTERSPACE</em></h4>
            <p>We are glad to see you here but you still need to find a job, dont you?</p>
            <div className='backToDash'>
              <Link id='backToDash'to='/dashboard'>
                <img src={logo} alt='jobreel-logo'/>
              </Link>
            </div>
          </div>
          <div className='astro'>
            <img src={astronaut} alt='astronaut'/>
          </div>
        </div>
      </section>
      <div className='credit'>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
      
    )
  }
}