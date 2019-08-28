import React from 'react';
import Button from '../Button/Button';
import './UserProfile.css'

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  }

  static getDerivedStateFromProps(props) {
    const { user } = props;
    return { user };
  }

  render() {
    const { user } = this.props;
    const city = user.city ? user.city : <Button onClick={this.props.updateEditingProfile}>Add City</Button>;
    const industry = user.industry ? user.industry : <Button onClick={this.props.updateEditingProfile}>Add Industry</Button>;
    const jobTitle = user.job_title ? user.job_title : <Button onClick={this.props.updateEditingProfile}>Add Job Title</Button>;
    return (
      <div className="UserProfile">
        <h3>{user.first_name} {user.last_name}</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>City: {city}</p>
        <p>Industry: {industry}</p>
        <p>Job Title: {jobTitle}</p>
        <Button onClick={this.props.updateEditingProfile}>Edit</Button>
      </div>
    )
  }
}

export default UserProfile;