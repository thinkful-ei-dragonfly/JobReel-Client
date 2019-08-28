import React from 'react';
import Button from '../../components/Button/Button';
import { Label, Input } from '../Form/Form';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';
import './SavedJob.css'
import { format } from 'date-fns'
import ReactHtmlParser from 'react-html-parser';

class SavedJob extends React.Component {

  static contextType = JobReelContext;

  state = {
    error: null,
    editing: false,
    company: this.props.company || '',
    title: this.props.title || '',
    city: this.props.city || '',
    state: this.props.state || '',
    url: this.props.url || '',
    status: this.props.status || '',
    description: this.props.desc || '',
    date_applied: this.props.date_applied,
    showDateApplied: false,
  };

  renderStateOptions = () => {
    const states = [
      ['Arizona', 'AZ'],
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['Arkansas', 'AR'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
    ];
    return states.map(state => {
      return <option key={state[1]} value={state[1]}>{state[0]}</option>
    })
  }

  handleToggle = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChangeCompany = e => {
    this.setState({ company: e.target.value })
  };

  handleChangeTitle = e => {
    this.setState({ title: e.target.value })
  };

  handleChangeCity = e => {
    this.setState({ city: e.target.value })
  };

  handleChangeState = e => {
    this.setState({ state: e.target.value })
  };

  handleChangeUrl = e => {
    this.setState({ url: e.target.value })
  };

  handleChangeStatus = e => {
    if(e.target.value === 'Applied'){
      this.setState({ status: e.target.value })
      this.setState({ showDateApplied: true })
    } else {
      this.setState({ status: e.target.value })
      this.setState({ date_applied: null })
      this.setState({ showDateApplied: false })
    }
  }

  handleDateApplied = e => {
    this.setState({ date_applied: e.target.value })
    this.setState({ showDateApplied: false })
  };

  handleChangeDesc = e => {
    this.setState({ description: e.target.value })
  }

  handleClickDelete(jobId){
    jobReelApiService.deleteJob(jobId)
    this.context.deleteJob(jobId)
  }

  validateUrl(url) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url)
  }

  handleError = (error) => {
    this.setState({ error })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { title, company, city, state, url, status, description, date_applied } = this.state
    if (!this.validateUrl(url)) {
      this.handleError('Please provide a valid website address starting with http:// or https://')
    } else {
      const editedJob = { 
        job_title: title, 
        company, 
        city, 
        state, 
        url, 
        status, 
        description,
        job_id: this.props.id,
        date_added: this.props.date,
        date_applied,
        user_id: this.props.user,
        notification: this.props.notification
       }
      jobReelApiService.editJob(editedJob, this.props.id)
      this.context.updateJob(editedJob)
      this.handleToggle()
      this.handleError(null)
    }
  }

  convertDate = (date) => {
    if (date) {
      let offset = new Date(date)
      offset.setMinutes(offset.getMinutes() + offset.getTimezoneOffset())
      return format(offset, 'YYYY-MM-DD')
    } else {
      return null;
    }
  }

  renderDateSelector(){
    const { showDateApplied, date_applied } = this.state
    let dateSelector;
    (date_applied || showDateApplied)
      ? dateSelector = 
      <div>
        <Label htmlFor='date-input'>Date Applied</Label>
        <br/>
        <Input type="date" id='date-input' name='date' value={this.convertDate(date_applied)} onChange={this.handleDateApplied}/>
      </div>
      : dateSelector = ''

      return dateSelector;
  }

  render(){
    const { title, company, city, state, url, status, description, error, editing, date_applied } = this.state
    let location = city;
    if (state) {
      location = `${city}, ${state}`;
    }
    let jobStatus;
    (status === 'Interested')
      ? jobStatus = <div className="job-status yellow">{status}</div>
      : jobStatus = <div className="job-status green">{status} on {format(date_applied, 'Do MMM YYYY')}</div> 

    let job = 
      <div className="job-box">
        {jobStatus}
        <h3>{company}: {title}</h3>
        <p>Posted {format(this.props.date, 'Do MMM YYYY')}</p>
        <p>{location}</p>
        <div className='job-url'>
          <a href={url}>{company}</a>
        </div>
        <div className='job-description'>
          {ReactHtmlParser(description)}
        </div>
        <Button onClick={() => this.handleClickDelete(this.props.id)} type="button">Delete</Button>
        <Button onClick={this.handleToggle} type="button">Edit</Button>
      </div>
    let editJob = 
      <form
      className='edit-job-form'
      onSubmit={this.handleSubmit}>
        <div>
          <div className="error-message">{error}</div>
          <Label htmlFor='title'>Title</Label>
          <br/>
          <Input
            type='text'
            name='title'
            id='title'
            placeholder={title}
            required
            value={title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <div>
          <Label htmlFor='company'>Company</Label>
          <br/>
          <Input
            type='text'
            name='company'
            id='company'
            placeholder={company}
            required
            value={company}
            onChange={this.handleChangeCompany}
          />
        </div>
        <div>
          <Label htmlFor='city'>City</Label>
          <br/>
          <Input
            type='text'
            name='city'
            id='city'
            placeholder={city}
            required
            value={city}
            onChange={this.handleChangeCity}
          />
        </div>
        <div>
          <Label htmlFor='state'>State</Label>
          <br/>
          <select onChange={this.handleChangeState} name="state" id="state-input" value={state}>
              {this.renderStateOptions()}
            </select>
        </div>
        <div>
          <Label htmlFor='url'>URL</Label>
          <br/>
          <Input
            type='text'
            name='url'
            id='url'
            placeholder={url}
            required
            value={url}
            onChange={this.handleChangeUrl}
          />
        </div>
        <div>
          <Label htmlFor='description'>Description</Label>
          <br/>
          <textarea 
            name='description'
            id='description'
            placeholder={description}
            rows='3'
            value={description}
            onChange={this.handleChangeDesc}
          />
        </div>
        <div>
          <Label htmlFor='status'>Status</Label>
          <br/>
          <select
              id='status-Input'
              name='status'
              onChange={this.handleChangeStatus}
              value={status}
            >
              <option value="Interested">Interested</option>
              <option value="Applied">Applied</option>
            </select>
        </div>
        {this.renderDateSelector()}
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={this.handleToggle}>Back</Button>
      </form>

    let display;
    (editing === false) ? display = job : display = editJob
    
    return(
      <div className="saved-job">
        {display}
      </div>
    )
  }
}

export default SavedJob