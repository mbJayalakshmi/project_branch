// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'your_api_base_url'; // Replace with your actual API base URL

// Service function to fetch data
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/your_api_endpoint`); // Replace with your actual API endpoint
    return response.data;
  } catch (error) {
    // Handle any error if needed
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled in the calling function
  }
};
