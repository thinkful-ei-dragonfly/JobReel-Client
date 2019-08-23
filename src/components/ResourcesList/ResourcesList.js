import React from 'react';
import './ResourcesList.css';
import ResourceCard from '../ResourceCard/ResourceCard';
import Button from '../Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

export default class ResourcesList extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
  }

  handleClickDelete(resourceId){
    jobReelApiService.deleteResource(resourceId)
    this.context.deleteResource(resourceId)
  }
  
  render() {
    let mappedResources;
    if(this.context.resources !== []){
      let resources = this.context.resources
      mappedResources = resources
        .map(resource => <ResourceCard key={resource.resource_id} id={resource.resource_id} type={resource.type} title={resource.title} description={resource.description} date={resource.date_added}/>)
    }

    return (
      <div className='resources-list'>
        <div className='button-for-add-form'>
          <Button onClick={() => this.context.setManualResourceAdd(true)} type='button' >Add Resource</Button>
        </div>
        <div className='saved-resources'>
          {mappedResources}
        </div>
      </div>
    )
  }
}