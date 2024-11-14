import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';

export default function BrickCalculator() {
  const [wallLength, setWallLength] = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [brickLength, setBrickLength] = useState('');
  const [brickHeight, setBrickHeight] = useState('');
  const [bricksNeeded, setBricksNeeded] = useState(null);

  const calculateBricks = () => {
    const length = parseFloat(wallLength);
    const height = parseFloat(wallHeight);
    const bLength = parseFloat(brickLength);
    const bHeight = parseFloat(brickHeight);

    if (isNaN(length) || isNaN(height) || isNaN(bLength) || isNaN(bHeight) ||
      length <= 0 || height <= 0 || bLength <= 0 || bHeight <= 0) {
      Alert.alert('Invalid input', 'Please enter valid positive numbers.');
      return;
    }

    const wallArea = length * height;
    const brickArea = bLength * bHeight;
    const bricks = Math.ceil(wallArea / brickArea);

    setBricksNeeded(bricks);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Brick Calculator</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Length of Wall (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={wallLength}
          onChangeText={setWallLength}
          placeholder="Enter length of wall"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Height of Wall (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={wallHeight}
          onChangeText={setWallHeight}
          placeholder="Enter height of wall"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Length of Brick (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={brickLength}
          onChangeText={setBrickLength}
          placeholder="Enter length of brick"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Height of Brick (m):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={brickHeight}
          onChangeText={setBrickHeight}
          placeholder="Enter height of brick"
        />
      </View>

      <Button title="Calculate" onPress={calculateBricks} />

      {bricksNeeded !== null && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Bricks Needed: {bricksNeeded}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  resultBox: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
