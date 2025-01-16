import axios from 'axios';
import dictionary from '../dictionary';

const apiHost = dictionary.apiHost;


const apiCall = async (endpoint, data) => {
  const ACCESS_TOKEN = localStorage.getItem('yexp@user');
  const url = apiHost + endpoint;
  // console.log('API URL:', url);
  const whitesList = [
    'central/watchman/login',
    'central/watchman/signup',
  ];
  if (!ACCESS_TOKEN && !whitesList.includes(endpoint)) {
    // console.log('Not allowed', endpoint);
    return {status: 'Fail', message: 'Request is not allowed!'};
  }
  //  console.log('API URL Logged in:', url);
  try {
    let response = await axios.post(url, data, {
      headers: {
        Authorization: 'Bearer ' + ACCESS_TOKEN,
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      withCredentials: false, // Ensure no cookies are sent unless required
    });

    return response.data;
  } catch (error) {
    let connError = {
      status: 'conn',
      message: 'Server connection error occured!',
      details: {message: 'Contacting server....', content: apiHost},
    };
    return connError;
  }
};

export default apiCall;
