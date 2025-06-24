import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text>Loading weather data...</Text>
      </View>
    );
  }

  const { temperature, description, location } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default WeatherDisplay;