import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import UserProfile from '../../components/UserProfile/UserProfile';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import jobReelContext from '../../context/JobReelContext';
import TopNav from '../../components/TopNav/TopNav';
import MediaQuery from 'react-responsive';
import jobReelApiService from '../../services/jobreel-api-service';
import './ProfileRoute.css'

class ProfileRoute extends React.Component {
  
  constructor() {
    super();
    this.state = {
      user: {},
      editingProfile: false
    }
  }
  
  static contextType = jobReelContext;

  componentDidMount() {
    jobReelApiService.getUserById(this.context.user.id)
      .then(res => {
        this.setUser(res);
      })
  }

  setUser = (user) => {
    user.id = this.context.user.id;
    this.setState({ user })
  }

  updateEditingProfile = () => {
    this.setState({ editingProfile: !this.state.editingProfile });
  }

  render() {
    let display;
    (this.state.editingProfile) ? display = <EditProfileForm user={this.state.user} setUser={this.setUser} updateEditingProfile={this.updateEditingProfile}/> : display = <UserProfile user={this.state.user} updateEditingProfile={this.updateEditingProfile}/>
    return (
      <div className="ProfileRoute">
        <div className='title'>
          <h2>Profile</h2>
        </div>
        <MediaQuery minDeviceWidth={960}>
          <SideNav/>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={959}>
          <TopNav/>
        </MediaQuery>
        {display}
      </div>
    )
  }
}

export default ProfileRoute;