import React from 'react';
import { Input, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'

class JobSearchForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const industry = e.target.industry.value;
    const jobTitle = e.target['job-title'].value;
    const location = e.target.location.value;
    const userInput = { industry, jobTitle, location };
    // Make api call
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor='industry-input'>
              Industry
            </Label>
            <br/>
            <Input
              ref={this.firstInput}
              id='industry-input'
              name='industry'
            />
          </div>
          <div>
            <Label htmlFor='job-title-input'>
              Job Title
            </Label>
            <br/>
            <Input
              id='job-title-input'
              name='job-title'
            />
          </div>
          <div>
            <Label htmlFor='location-input'>
              Location
            </Label>
            <br/>
            <Input
              ref={this.firstInput}
              id='location-input'
              name='location'
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default JobSearchForm;