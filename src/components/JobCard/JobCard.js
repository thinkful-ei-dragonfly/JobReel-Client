import React from 'react';

export default function JobCard(props) {
  return (
    <div class='JobCard'>
      this is job card
      <div className='job-title'>
        <h3>{this.props.title}</h3>
      </div>
      <div className='job-description'> 
        <p>{this.props.description}</p>
      </div>
      <div className='job-status'>
        {this.props.status}
      </div>
    </div>
  )
}