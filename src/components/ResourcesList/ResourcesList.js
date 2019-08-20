import React from 'react';
import './ResourcesList.css';
import ResourceCard from '../ResourceCard/ResourceCard';


export default class ResourcesList extends React.Component {
  
  
  render() {
    return (
      <div className='resources-list'>
        <h3>Resources</h3>
      <div className='saved-resources'>
        <ResourceCard/>
      </div>
      </div>
    )
  }
}