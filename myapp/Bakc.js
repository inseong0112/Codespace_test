import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20, fontWeight: 'bold' }}>
        Current Number: {number}
      </Text>
      <View style={{ gap: 10 }}>
        <Button
          title="Increment"
          onPress={() => setNumber(prevNumber => prevNumber + 1)}
        />
        <Button
          title="Decrement"
          onPress={() => setNumber(prevNumber => prevNumber - 1)}
        />
        <Button
          title="증가"
          onPress={() => setNumber(prevNumber => prevNumber + 1)}
        />
        <Button
          title="감소"
          onPress={() => setNumber(prevNumber => prevNumber - 1)}
        />
        <Button
          title="Reset"
          onPress={() => setNumber(0)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
