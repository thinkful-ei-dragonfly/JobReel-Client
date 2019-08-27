import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext'
import JobReelService from '../../services/jobreel-api-service'
import ProfessionalContact from '../../components/ProfessionalContact/ProfessionalContact'
import SideNav from '../../components/SideNav/SideNav'
import { Link } from 'react-router-dom'

export default class FindContactsRoute extends Component {
    state = {
        search: null
    }
    static contextType = JobReelContext

    componentDidMount() {
        setTimeout(() => {
            console.log(this.context.professionalsSearch)
            const search = this.context.professionalsSearch
            JobReelService.getProfessionalEmails(search)
                .then(data => {
                    this.context.setProfessionals(data.data.emails)
                    this.context.setFindContactsMetaData(data.meta)
                })
                console.log(this.context)
        }, 500)
    }

    renderProfessionalContacts() {
        const { professionals = [], professionalsSearch = {} } = this.context
        console.log(professionals)
        const professionalList = professionals.map((professional, i) => {
            if (professional.first_name) {
                return <ProfessionalContact professional={professional} key={i} search={professionalsSearch}/>
            }           
        })
        return (
            <>
                {professionalList}
            </>
        )
    }
    render() {
        return (
            <>
                <SideNav />
                <br />
                <Link to={`/professionalsearch`} alt="goBack"><h2>Go Back</h2></Link>
                {this.renderProfessionalContacts()}
            </>
        )
    }
}