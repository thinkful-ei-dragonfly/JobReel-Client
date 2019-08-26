import React from 'react';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';

class EditProfileForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const firstName = e.target['first-name'].value;
    const lastName = e.target['last-name'].value;
    const username = e.target['user-name'].value;
    const email = e.target.email.value;
    const location = e.target.location.value;
    const industry = e.target.industry.value;
    const jobTitle = e.target['job-title'].value;
    const updatedUser = { id: this.props.user.id, firstName, lastName, username, email, location, industry, jobTitle }
    console.log(updatedUser);
  }

  handleClick = () => {
    console.log(`Don't submit`);
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
            <Label htmlFor='user-name-input'>
                User Name
            </Label>
            <br />
            <Input
                name="user-name"
                id="user-name-input"
                defaultValue={user.username}
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
            <Label htmlFor='location-input'>
                Location
            </Label>
            <br />
            <Input
                name="location"
                id="location-input"
                defaultValue={user.location}
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
          <Button onClick={this.handleClick}>Back</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default EditProfileForm;