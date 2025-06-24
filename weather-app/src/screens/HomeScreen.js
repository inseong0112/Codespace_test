import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import WeatherDisplay from '../components/WeatherDisplay';
import { getWeather } from '../services/weatherApi';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeather('your-location'); // Replace 'your-location' with actual location
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View>
      <WeatherDisplay weatherData={weatherData} />
    </View>
  );
};

export default HomeScreen;