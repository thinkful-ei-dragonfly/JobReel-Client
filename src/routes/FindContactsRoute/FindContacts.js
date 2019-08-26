import React, { Component } from 'react';
import JobReelContext from '../../context/JobReelContext'
import JobReelService from '../../services/jobreel-api-service'
import ProfessionalContact from '../../components/ProfessionalContact/ProfessionalContact'
import SideNav from '../../components/SideNav/SideNav'
import MediaQuery from 'react-responsive';
import TopNav from '../../components/TopNav/TopNav'
import './FindContacts.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        const { professionals = [] } = this.context
        console.log(professionals)
        const professionalList = professionals.map((professional, i) => {
            if (professional.first_name) {
                return <ProfessionalContact professional={professional} key={i} />
            }           
        })
        return (
            <div className='results'>
                {professionalList}
            </div>
        )
    }
    render() {
        return (
            <div className='contacts-search-results'>
                <div className='title'>
                    <h2>Find Contacts</h2>
                </div>
                <MediaQuery minDeviceWidth={961}>
                  <SideNav/>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={960}>
                  <TopNav/>
                </MediaQuery>
                <div className='results-container'>
                    <Link to={`/professionalsearch`} alt="goBack">
                        <FontAwesomeIcon id='go-back' icon='times-circle' size='2x'/>
                    </Link>
                    {this.renderProfessionalContacts()}
                </div>
                
            </div>
        )
    }
}