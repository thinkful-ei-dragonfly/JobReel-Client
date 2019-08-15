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
}

export default JobReelApiService
