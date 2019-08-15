import config from '../config'
import {data} from './dummydata'
import TokenService from './token-service';

const JobReelApiService = {
    getJobs(search) {
        // console.log(data)
        // return data;
        return fetch(`${config.API_ENDPOINT}/savedjobs`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
        })
    },
    getJobDetails(jobkey) {
        // return fetch(`${config.API_ENDPOINT}/recipes/url`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //       },
        //     body: JSON.stringify({
        //         jobkey,
        //     }),
        // })
        // .then(res =>
        //     (!res.ok)
        //     ? res.json().then(e => Promise.reject(e))
        //     : res.json()
        // )
    },
    submitJob(jobData) {
        fetch(`${config.API_ENDPOINT}/savedjobs`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
        .then(res => {
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        })
    },
}

export default JobReelApiService
