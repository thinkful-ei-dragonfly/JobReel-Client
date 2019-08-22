import React from 'react';
import './ResourceCard.css';
import JobReelContext from '../../context/JobReelContext';
import JobReelApiService from '../../services/jobreel-api-service';

export default class ResourceCard extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    editing: false,
    title: this.props.title,
    type: this.props.type,
    description: this.props.description
  }
  
  handleClickDelete(resourceId){
    JobReelApiService.deleteResource(resourceId)
    this.context.deleteResource(resourceId)
  };

  handleChangeResourceTitle = e => {
    this.setState({ title: e.target.value})
  };

  handleChangeResourceType = e => {
    this.setState({type: e.target.value})
  };

  handleChangeResourceDescription = e => {
    this.setState({ description: e.target.value})
  };

  handleError = (error) => {
    this.setState({error})
  };

  handleSubmit = async e => {
    e.preventDefault()
    const {title, type, description} = this.state
    
  }

  render() {
    
    return (
      <div className='resource-card'>
        <div className='card-title'>
          {this.props.title}
        </div>
        <div className='card-type'>
          {this.props.type}
        </div>
        <div className='card-description'>
          {this.props.description}
        </div>
        <div className='card-date'>
          {this.props.date_added}
        </div>
      </div>
      )
    }
}