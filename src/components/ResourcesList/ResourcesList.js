import React from 'react';
import './ResourcesList.css';
import ResourceCard from '../ResourceCard/ResourceCard';
import Button from '../Button/Button';
import JobReelContext from '../../context/JobReelContext';



export default class ResourcesList extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
  }


  
  render() {
    return (
      <div className='resources-list'>
        <div className='button-for-add-form'>
          <Button onClick={() => this.context.setManualResourceAdd(true)} type='button' >Add Resource</Button>
        </div>
        <div className='saved-resources'>
          <ResourceCard/>
        </div>
      </div>
    )
  }
}