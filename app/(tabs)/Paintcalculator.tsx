// components/PaintCalculator.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const PaintCalculator: React.FC = () => {
  const [wallLength, setWallLength] = useState<number>(0);
  const [wallHeight, setWallHeight] = useState<number>(0);
  const [coverage, setCoverage] = useState<number>(0);
  const [paintNeeded, setPaintNeeded] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatePaintNeeded = () => {
    setError(null);
    if (wallLength > 0 && wallHeight > 0 && coverage > 0) {
      const area = wallLength * wallHeight;
      const needed = area / coverage;
      setPaintNeeded(needed);
    } else {
      setError('Please enter valid dimensions and coverage.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Paint Calculator</Text>
      <View style={styles.formGroup}>
        <Text>Length of Wall (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter length"
          keyboardType="numeric"
          onChangeText={(value) => setWallLength(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Height of Wall (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter height"
          keyboardType="numeric"
          onChangeText={(value) => setWallHeight(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Paint Coverage (m²/liter):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter coverage"
          keyboardType="numeric"
          onChangeText={(value) => setCoverage(parseFloat(value))}
        />
      </View>
      <Button title="Calculate" onPress={calculatePaintNeeded} />
      {error && <Text style={styles.error}>{error}</Text>}
      {paintNeeded !== null && (
        <Text style={styles.result}>Paint Needed: {paintNeeded.toFixed(2)} liters</Text>
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

export default PaintCalculator;
