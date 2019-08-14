import React from 'react';
import Summary from '../Summary/Summary';

class SummaryContainer extends React.Component {
  render() {
    return (
      <div className="SummaryContainer">
        <Summary section="APPLIED JOBS" />
        <Summary section="JOBS I LIKE" />
        <Summary section="COMPANIES OF INTEREST" />
        <Summary section="PROFESSIONAL CONTACTS" />
        <Summary section="NETWORKING EVENTS" />
        <Summary section="USEFUL RESOURCES" />
      </div>
    )
  }
}

export default SummaryContainer;