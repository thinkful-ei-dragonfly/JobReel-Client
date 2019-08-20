import React from 'react';
import './ResourceCard.css';

const ResourcesDummy = [
  {
    id: 1,
    type: 'test',
    title: 'test1',
    description: 'test2',
    date_added: new Date()
  },
  {
    id: 2,
    type: 'test',
    title: 'test1',
    description: 'test2',
    date_added: new Date()
  },
  {
    id: 3,
    type: 'test',
    title: 'test1',
    description: 'test2',
    date_added: new Date()
  },
  {
    id: 4,
    type: 'test',
    title: 'test1',
    description: 'test2',
    date_added: new Date()
  },
]

export default class ResourceCard extends React.Component {


  

  render() {
    let list = ResourcesDummy.forEach((resource, i) => {
      return (
        <div className='resource-card' key={i}>
          <div className='card-title'>
            {resource.title}
          </div>
          <div className='card-type'>
            {resource.type}
          </div>
          <div className='card-description'>
            {resource.description}
          </div>
          <div className='card-date'>
            {resource.date_added}
          </div>
        </div>
      )
    });
    
    return (
      <div>
        { list }
      </div>  
      )
    }
}