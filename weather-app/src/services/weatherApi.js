import axios from 'axios';

const API_KEY = 'bf6089e5e6eb4ae181bc7187557166c2'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        appid: API_KEY,
        units: 'metric', // or 'imperial' for Fahrenheit
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};