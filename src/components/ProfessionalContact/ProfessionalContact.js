import React, { Component } from 'react'
import './ProfessionalContact.css';
export default class ProfessionalContact extends Component {

  renderProfessionalContact() {
    const {professional = {}} = this.props
    return (
    <div className='contact-card'>
      <div className='contact-name'>
        <h4>Name: {professional.first_name} {professional.last_name}</h4>
      </div>
      <div className='contact-department'>
        {professional.department ? <p>Department: {professional.department}</p> : ''}
      </div>
      <div className='contact-position'>
        {professional.position ? <p>Position: {professional.position}</p> : ''}
      </div>
      <div className='contact-type'>
        {professional.type ? <p>Type: {professional.type}</p> : ''}
      </div>
      <div className='contact-email'>
        {professional.value ? <p>Email: {professional.value}</p> : ''}
      </div>
      <div className='contact-phone'>
        {professional.phone_number ? <a href={professional.phone_number} alt='professionals-phone'>Call</a> : ''}
      </div>
      <div>
        {professional.linkedin ?<a href={professional.linkedin} alt='contact-linkedIn-link'>LinkedIn</a> : ''}
      </div>
    </div>
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