import React from 'react';
import JobReelContext from '../../context/JobReelContext';
import { Label, Input } from '../Form/Form';


export default class ResourcesForm extends React.Component {
  static contextType = JobReelContext;

  state = {
    error: null
  };

  render() {
    const { error } = this.state;
    return (
      <div className='resources-form'>
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <form>
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
            <Label htmlFor=''>

            </Label>
          </div>
        </form>
      </div>
    )
  }
}