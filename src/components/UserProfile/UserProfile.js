import React from 'react';
import jobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import Button from '../Button/Button';

class UserProfile extends React.Component {

  static getDerivedStateFromProps(props) {
    const { user } = props;
    console.log(user);
    return null;
  }

  render() {
    const { user } = this.props;
    const location = user.location ? user.location : <Button onClick={this.props.updateEditingProfile}>Add Location</Button>;
    const industry = user.industry ? user.industry : <Button onClick={this.props.updateEditingProfile}>Add Industry</Button>;
    const jobTitle = user.job_title ? user.job_title : <Button onClick={this.props.updateEditingProfile}>Add Job Title</Button>;
    return (
      <div className="UserProfile">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Location: {location}</p>
        <p>Industry: {industry}</p>
        <p>Job Title: {jobTitle}</p>
      </div>
    )
  }
}

export default UserProfile;