import React from 'react';
import './Summary.css';

class Summary extends React.Component {
  render() {
    return (
      <>
        <div className="Summary">
          <h4>{this.props.section}</h4>
        </div>
        <div className='options'>
          <ul>
            <li>Placeholder 1</li>
            <li>Placeholder 2</li>
            <li>Placeholder 3</li>
          </ul>
        </div>
      </>
    )
  }
}

export default Summary;