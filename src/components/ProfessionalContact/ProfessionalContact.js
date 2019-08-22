import React, { Component } from 'react'

export default class ProfessionalContact extends Component {

    renderProfessionalContact() {
        const {professional = {}} = this.props
        return (
        <>
        <h2>Name: {professional.first_name} {professional.last_name}</h2>
        {professional.department ? <p>Department: {professional.department}</p> : ''}
        {professional.position ? <p>Position: {professional.position}</p> : ''}
        {professional.type ? <p>Type: {professional.type}</p> : ''}        
        {professional.value ? <p>Email: {professional.value}</p> : ''}
        {professional.phone_number ? <p>Phone: {professional.phone_number}</p> : ''}
        {professional.linkedin ?<p>LinkedIn: {professional.linkedin}</p> : ''}
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