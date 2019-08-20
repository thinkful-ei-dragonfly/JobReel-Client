import React from 'react';
import { Input, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import './JobSearchForm.css';
import JobReelContext from '../../context/JobReelContext';

class JobSearchForm extends React.Component {
  static contextType = JobReelContext

  handleSubmit = (e) => {
    e.preventDefault();
    // const industry = e.target.industry.value;
    const jobTitle = e.target['job-title'].value;
    const location = e.target.location.value;
    // const userInput = { industry, jobTitle, location };
    this.takeToNext();
    // Make api call
    this.context.setSearch({ jobTitle, location })
    this.props.history.push(`/JobsList`)
    // console.log(this.context)
  }

  takeToNext = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/jobsearch/results';
    history.push(destination);
  }

  render() {
    return (
      <div className='job-search'>
        <form className='JobSearchForm' onSubmit={this.handleSubmit}>
          {/* <div>
            <Label htmlFor='industry-input'>
              Industry
            </Label>
            <br/>
            <Input
              ref={this.firstInput}
              id='industry-input'
              name='industry'
            />
          </div> */}
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
          <br/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default JobSearchForm;