import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

class ProfileRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      editingProfile: false
    }
  }

  static contextType = jobReelContext;

  componentDidMount() {
    console.log(this.context.user);
    jobReelApiService.getUserById(this.context.user.id);
  }

  render() {
    return (
      <div className="ProfileRoute">
        <div className='title'>
          <h2>Profile</h2>
        </div>
        <SideNav />
        
      </div>
    )
  }
}

export default ProfileRoute;