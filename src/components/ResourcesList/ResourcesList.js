import React from 'react';
import './ResourcesList.css';
import ResourceCard from '../ResourceCard/ResourceCard';
import Button from '../Button/Button';
import JobReelContext from '../../context/JobReelContext';
import { Label, Input } from '../Form/Form';
import jobReelApiService from '../../services/jobreel-api-service';

export default class ResourcesList extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    filter: '',
    search: ''
  }

  handleStatusFilter = e => {
    this.setState({ filter: e.target.value })
  }

  handleChangeSearchTerm = e => {
    this.setState({ search: e.target.value })
  }

  renderResources = () => {
    let search = this.state.search
    let filter = this.state.filter
    let resources = Array.from(this.context.resources)
    if(search !== ''){
      resources = resources.filter(resource => resource.title.toLowerCase().includes(search.toLowerCase()) || 
      resource.description.toLowerCase().includes(search.toLowerCase())
    )}
    if(filter !== ''){
      resources = resources.filter(resource => resource.type === filter)
    }
    resources = resources.map(resource => <ResourceCard key={resource.resource_id} id={resource.resource_id} type={resource.type} title={resource.title} description={resource.description} date={resource.date_added}/>)
    
    return (
      <div>
        {resources}
      </div>
    )
  }

  
  render() {
    return (
      <div className='resources-list'>
        <div className='savedResourceFilterControls'>
          <Label id='savedResourceFilterTitle'>Filter by Job Status:</Label>
          <select
            id='status-input'
            name='status'
            onChange={this.handleStatusFilter}
          >
            <option value="">N/A</option>
            <option value="website">Website</option>
            <option value="book">Book</option>
            <option value="github repository">Github Repository</option>
            <option value="magazine">Magazine</option>
            <option value="online publication">Online Publication</option>
            <option value="podcast">Podcast</option>
          </select>
          <br/>
          <Label id='savedResourceFilterSearch'>Search:</Label>
          <Input
            type='text'
            name='saved-resource-search'
            id='saved-resource-search'
            value={this.state.search}
            onChange={this.handleChangeSearchTerm}
          />
          <br/>
          <Button onClick={() => this.context.setManualResourceAdd(true)} type='button' >Add Resource</Button>
        </div>
        <div className='saved-resources'>
          {this.renderResources()}
        </div>
      </div>
    )
  }
}