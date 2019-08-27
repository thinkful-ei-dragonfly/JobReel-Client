import React, { Component } from 'react'
import Button from '../../components/Button/Button';
import JobReelContext from '../../context/JobReelContext';
import jobReelApiService from '../../services/jobreel-api-service';

export default class ProfessionalContact extends Component {

    static contextType = JobReelContext

    state = {
        error: null,
        saved: false
    }

    static getDerivedStateFromProps(props) {
        const {professional = {}, savedContactEmails } = props
        if (professional.value in savedContactEmails) {
            return {saved: true};
        }
        return null;
    }

    handleClick = () => {
        this.setState({ saved: true })
        this.setState({ error: null });
        const contact_name = `${this.props.professional.first_name} ${this.props.professional.last_name}`
        const job_title = this.props.professional.position
        const company = this.props.search.company
        const email = this.props.professional.value
        const linkedin = this.props.professional.linkedin
        const connected = false
        const userInput = { user_id: this.context.user.id, job_title, company, contact_name, email, linkedin, connected }
        jobReelApiService.submitContact(userInput)
            .then(res => {
            this.context.setContacts([...this.context.contacts, res]);
            })
            .catch(res => {
            this.setState({ error: res.error })
            })
    }

    renderSaveButton() {
        if (this.state.saved) {
            return (
                <div className='save-button'>
                    <p>Saved &#10004;</p>
                </div>
            
            )
        } else {
            return (
                <div className='save-button'>
                    <Button id='save-button' onClick={this.handleClick}>Save Job</Button>
                </div>
            
            )  
        } 
    }

    renderProfessionalContact() {
        const {professional = {}, search = {}} = this.props
        return (
        <>
        <h2>Name: {professional.first_name} {professional.last_name}</h2>
        {search.company ? <p>Company: {search.company}</p> : ''}
        {professional.department ? <p>Department: {professional.department}</p> : ''}
        {professional.position ? <p>Position: {professional.position}</p> : ''}
        {/* {professional.type ? <p>Type: {professional.type}</p> : ''}         */}
        {professional.value ? <p>Email: {professional.value}</p> : ''}
        {/* {professional.phone_number ? <p>Phone: {professional.phone_number}</p> : ''} */}
        {professional.linkedin ?<p>LinkedIn: {professional.linkedin}</p> : ''}
        <p className="error-message">{this.state.error}</p>
        {this.renderSaveButton()}
        {/* <Button onClick={this.handleClick}>Add Contact</Button> */}
        </>
        )
    }

    render() {
        return (
            <>
                {this.renderProfessionalContact()}
            </>
        )
    }
}