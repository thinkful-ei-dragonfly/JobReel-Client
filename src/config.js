export default {
    API_ENDPOINT: process.env.API_ENDPOINT || 'https://rocky-crag-74904.herokuapp.com/api',
    // API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8000/api',
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_TOKEN: process.env.CLIENT_TOKEN,
    TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'jobReel-jwt-secret',
  }
  