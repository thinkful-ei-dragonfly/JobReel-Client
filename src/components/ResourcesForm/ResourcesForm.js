import React from 'react';
import JobReelContext from '../../context/JobReelContext';
import { Label, Input } from '../Form/Form';
import Button from '../Button/Button';
import './ResourcesForm.css';
import JobReelApiService from '../../services/jobreel-api-service';


export default class ResourcesForm extends React.Component {
  static contextType = JobReelContext;

  state = {
    error: null
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const type = e.target.type.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const userInput = { user_id: this.context.user.id, type, title, description };
    JobReelApiService.submitResource(userInput)
      .then(res => {
        e.target.type.value = '';
        e.target.title.value = '';
        e.target.description.value = '';
        this.context.setResources([...this.context.resources, res]);
        console.log(this.context.resources)
      })
      .catch(res => {
        this.setState({ error: res.error });
    })
  }


  

  render() {
    const { error } = this.state;
    return (
      <div className='resources-form'>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor='resource-type-input'>
              Type
            </Label>
            <br />
            <Input
              id='resource-type-input'
              name='type'
            />
          </div>
          <div>
            <Label htmlFor='resource-title-input'>
              Title
            </Label>
            <br />
            <Input
              id='resource-title-input'
              name='title'
            />
          </div>
          <div>
            <Label htmlFor='resources-description-input'>
              Description
            </Label>
            <br/>
            <textarea
              id='resources-description-input'
              name='description'
            />
          </div>
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}