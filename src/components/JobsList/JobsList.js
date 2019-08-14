import React from 'react';
import './JobsList.css';
import JobCard from '../JobCard/JobCard';
import JobReelContext from '../../context/JobReelContext';

export default class JobsList extends React.Component {
  static contextType = JobReelContext;


  render() {
    const cards = this.context.jobs.forEach((job, index) => {
      return (
        <JobCard key={index} title={job.title} description={job.description} status={job.status}/>
      )
    })
    return (
      <div className='JobsList'>
        <div className='title-h2'>
          <h2>Jobs List</h2>
        </div>
        <div className='list'>
          job cards go here
          {cards}
        </div>
      </div>
    )
  }
}