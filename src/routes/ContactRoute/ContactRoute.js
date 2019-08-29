import React from 'react';
import './ContactRoute.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const propTypes = {};

const defaultProps = {};

export default class ContactRoute extends React.Component {
  render() {
    return (
        <div className='content-wrapper'>
          <div className='person-card'>
            <div className='person-name'>
              <h3>Aldiyar Batyrbekov</h3>
            </div>
            <div className='role'>
              <h4>Design Lead</h4>
            </div>
            <div className='person-contact-info'>
              <a href='https://www.linkedin.com/in/aldibatyr/'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
              {' '}
              <a href='https://github.com/aldibatyr'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
            </div>
          </div>
          <div className='person-card'>
            <div className='person-name'>
              <h3>Chris Fiander</h3>
            </div>
            <div className='role'>
              <h4>Product Manager</h4>
            </div>
            <div className='person-contact-info'>
              <a href='-empty'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
              {' '}
              <a href='-empty'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
            </div>
          </div>
          <div className='person-card'>
            <div className='person-name'>
              <h3>Erin Dustin</h3>
            </div>
            <div className='role'>
              <h4>Project Manager</h4>
            </div>
            <div className='person-contact-info'>
              <a href='https://www.linkedin.com/in/erin-dustin/'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
              {' '}
              <a href='https://github.com/erincdustin'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
            </div>
          </div>
          <div className='person-card'>
            <div className='person-name'>
              <h3>Jonathan Moore</h3>
            </div>
            <div className='role'>
              <h4>QA Lead</h4>
            </div>
            <div className='person-contact-info'>
              <a href='https://www.linkedin.com/in/jonathan-moore-73b24721/'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
              {' '}
              <a href='https://github.com/JonathanEdMoore'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
            </div>
          </div>
          <div className='person-card'>
            <div className='person-name'>
              <h3>Michael Romero</h3>
            </div>
            <div className='role'>
              <h4>Product Manager</h4>
            </div>
            <div className='person-contact-info'>
              <a href='https://www.linkedin.com/in/michael-romero-854037147/'><FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/></a>
              {' '}
              <a href='https://github.com/michaelromero09'><FontAwesomeIcon size='2x' icon={['fab', 'github-square']}/></a>
            </div>
          </div>
        </div>
    );
  }
}

 ContactRoute.propTypes = propTypes;
 ContactRoute.defaultProps = defaultProps;