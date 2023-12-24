import axios from 'axios';

// Set a default base URL for your API
axios.defaults.baseURL = 'https://api.example.com'; // Replace with your actual API base URL

// Set authentication headers if needed
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + authToken;

// Request interceptor for GET requests
axios.interceptors.request.use((config) => {
  if (config.method === 'get') {
    // You can add custom logic or headers for GET requests here
    // config.headers['Custom-Header'] = 'value';
  }
  return config;
});

// Request interceptor for POST, PATCH, and DELETE requests
axios.interceptors.request.use((config) => {
  if (['post', 'patch', 'delete'].includes(config.method)) {
    // You can add custom logic or headers for POST, PATCH, and DELETE requests here
    // config.headers['Custom-Header'] = 'value';
  }
  return config;
});

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error('An unexpected error occurred:', error);
    // You can log the error or show a generic error message to the user
  }

  return Promise.reject(error);
});

// Export axios for use in other parts of your application
export default axios;
