import React from 'react';
import './ResourceCard.css';
import Button from '../../components/Button/Button';
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

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
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
    const {title, type, description, editing, error } = this.state
    let resource = 
    <div className='resource-card'>
        <div className='card-title'>
          {title}
        </div>
        <div className='card-type'>
          {type}
        </div>
        <div className='card-description'>
          {description}
        </div>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editResource =
    <form
      className='edit-contact-form'
      onSubmit={this.handleSubmit}>
        <div>
          <div className="error-message">{error}</div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder={title}
            required
            value={title}
            onChange={this.handleChangeResourceTitle}
          />
        </div>
        <div>
          <label htmlFor='type'>Resource Type</label>
          <select
              id='type-input'
              name='type'
              onChange={this.handleChangeResourceType}
              value={type}
            >
              <option value="website">Website</option>
              <option value="book">Book</option>
              <option value="github repository">Github Repository</option>
              <option value="magazine">Magazine</option>
              <option value="online publication">Online Publication</option>
              <option value="podcast">Podcast</option>
              'website', 'book', 'github repository', 'magazine', 'online publication', 'podcast'
            </select>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            placeholder={description}
            rows='3'
            value={description}
            onChange={this.handleChangeResourceDescription}
          />
        </div>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>
    let display;
    (editing === false) ? display = resource : display = editResource

    return (
      <div>
        {display}
      </div>
      )
    }
}