import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import ResourcesForm from '../../components/ResourcesForm/ResourcesForm';
import './ResourcesRoute.css';
import ResourcesList from '../../components/ResourcesList/ResourcesList';
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
        <ResourcesList/>
        {/* <ResourcesForm/> */}
      </div>
    )
  }
}

export default ResourcesRoute;