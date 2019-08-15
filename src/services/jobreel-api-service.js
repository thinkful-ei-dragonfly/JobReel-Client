import config from '../config'
import {data} from './dummydata'

const JobReelApiService = {
    getJobs(search) {
        console.log(data)
        return data;
        // return fetch(`${config.API_ENDPOINT}/recipes`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         'Authorization': `bearer ${TokenService.getAuthToken()}`,
        //       },
        //     body: JSON.stringify({
        //         search,
        //     }),
        // })
        //     .then(res =>
        //         (!res.ok)
        //         ? res.json().then(e => Promise.reject(e))
        //         : res.json()
        //     )
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
}

export default JobReelApiService
