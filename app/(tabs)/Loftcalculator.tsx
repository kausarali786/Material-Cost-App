// components/LoftCalculator.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const LoftCalculator: React.FC = () => {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [loftVolume, setLoftVolume] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateLoftVolume = () => {
    setError(null);
    if (length > 0 && width > 0 && height > 0) {
      const volume = length * width * height;
      setLoftVolume(volume);
    } else {
      setError('Please enter valid dimensions.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Loft Calculator</Text>
      <View style={styles.formGroup}>
        <Text>Length of Loft (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter length"
          keyboardType="numeric"
          onChangeText={(value) => setLength(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Width of Loft (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter width"
          keyboardType="numeric"
          onChangeText={(value) => setWidth(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Height of Loft (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter height"
          keyboardType="numeric"
          onChangeText={(value) => setHeight(parseFloat(value))}
        />
      </View>
      <Button title="Calculate" onPress={calculateLoftVolume} />
      {error && <Text style={styles.error}>{error}</Text>}
      {loftVolume !== null && (
        <Text style={styles.result}>Loft Volume: {loftVolume.toFixed(2)} m³</Text>
      )}
      <View style={styles.chatbot}>
        {/* Chatbot integration can go here */}
        <Text>Chatbot Integration Placeholder</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  chatbot: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000,
  },
});

export default LoftCalculator;
