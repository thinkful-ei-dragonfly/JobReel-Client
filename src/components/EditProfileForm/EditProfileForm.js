import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import jobReelApiService from '../../services/jobreel-api-service';
import AuthApiService from '../../services/auth-api-service';
import tokenService from '../../services/token-service';
import jobReelContext from '../../context/JobReelContext';

class EditProfileForm extends React.Component {

  static contextType = jobReelContext

  handleSubmit = (e) => {
    e.preventDefault();
    const first_name = e.target['first-name'].value;
    const last_name = e.target['last-name'].value;
    const username = this.props.user.username;
    const email = e.target.email.value;
    const city = e.target.city.value;
    const industry = e.target.industry.value;
    const job_title = e.target['job-title'].value;
    const updatedUser = { id: this.props.user.id, first_name, last_name, username, email, city, industry, job_title };
    jobReelApiService.editUserInfo(updatedUser)
      .then(res => {
        this.props.setUser(res);
      })
    this.props.updateEditingProfile();
  }

  handleClick = () => {
    this.props.updateEditingProfile();
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor='first-name-input'>
                First Name
            </Label>
            <br />
            <Input
                name="first-name"
                id="first-name-input"
                defaultValue={user.first_name}
            />
          </div>
          <div>
            <Label htmlFor='last-name-input'>
                Last Name
            </Label>
            <br />
            <Input
                name="last-name"
                id="last-name-input"
                defaultValue={user.last_name}
            />
          </div>
          <div>
            <Label htmlFor='email-input'>
                Email
            </Label>
            <br />
            <Input
                name="email"
                id="email-input"
                defaultValue={user.email}
            />
          </div>
          <div>
            <Label htmlFor='city-input'>
                City
            </Label>
            <br />
            <Input
                name="city"
                id="city-input"
                defaultValue={user.city}
            />
          </div>
          <div>
            <Label htmlFor='industry-input'>
                Industry
            </Label>
            <br />
            <Input
                name="industry"
                id="industry-input"
                defaultValue={user.industry}
            />
          </div>
          <div>
            <Label htmlFor='job-title-input'>
                Job Title
            </Label>
            <br />
            <Input
                name="job-title"
                id="job-title-input"
                defaultValue={user.job_title}
            />
          </div>
          <Button type="button" onClick={this.handleClick}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default EditProfileForm;