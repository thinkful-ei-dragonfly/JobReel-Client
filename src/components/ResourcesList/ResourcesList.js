import React from 'react';
import './ResourcesList.css';
import ResourceCard from '../ResourceCard/ResourceCard';
import Button from '../Button/Button';
import ResourcesForm from '../ResourcesForm/ResourcesForm';


export default class ResourcesList extends React.Component {
  state = {
    error: null,
  }


  
  render() {
    return (
      <div className='resources-list'>
        <h3>Resources</h3>
        <div className='button-for-add-form'>
          <Button type='button' onClick={this.unfoldForm}>Add Resource</Button>
        </div>
        <div className='saved-resources'>
          <ResourceCard/>
        </div>
      </div>
    )
  }
}