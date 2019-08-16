import config from '../config'
import TokenService from './token-service'

const JobReelApiService = {
    getJobs(search) {
        return fetch(`${config.API_ENDPOINT}/jobs`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
              },
            body: JSON.stringify({
                search,
            }),
        })
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
            .then(data => {
                return data.listings
            })
    },
    getSavedJobs() {
        return fetch(`${config.API_ENDPOINT}/savedjobs`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        )
    },
    submitJob(jobData) {
        return fetch(`${config.API_ENDPOINT}/savedjobs`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getSavedEvents() {
        return fetch('http://localhost:8000/api/events', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    submitEvent(eventData) {
        return fetch('http://localhost:8000/api/events', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
}

export default JobReelApiService
