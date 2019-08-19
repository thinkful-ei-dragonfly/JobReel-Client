import React from 'react';
import SideNav from '../../components/SideNav/SideNav';

class ResourcesRoute extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  state = { error: null };

  render() {
    return (
      <div className='resources-page'>
        <div className='title'>
          <h2>Resources</h2>
        </div>
        <SideNav />
        {/* <ResourcesForm/> */}
      </div>
    )
  }
}

export default ResourcesRoute;