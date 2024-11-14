// components/TileCalculator.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const TileCalculator: React.FC = () => {
  const [roomLength, setRoomLength] = useState<number>(0);
  const [roomWidth, setRoomWidth] = useState<number>(0);
  const [tileLength, setTileLength] = useState<number>(0);
  const [tileWidth, setTileWidth] = useState<number>(0);
  const [tilesNeeded, setTilesNeeded] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateTilesNeeded = () => {
    setError(null);
    const roomArea = roomLength * roomWidth;
    const tileArea = tileLength * tileWidth;

    if (tileArea > 0) {
      const needed = Math.ceil(roomArea / tileArea);
      setTilesNeeded(needed);
    } else {
      setError('Please enter valid tile dimensions.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tile Calculator</Text>
      <View style={styles.formGroup}>
        <Text>Length of Room (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter length"
          keyboardType="numeric"
          onChangeText={(value) => setRoomLength(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Width of Room (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter width"
          keyboardType="numeric"
          onChangeText={(value) => setRoomWidth(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Length of Tile (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tile length"
          keyboardType="numeric"
          onChangeText={(value) => setTileLength(parseFloat(value))}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Width of Tile (m):</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter tile width"
          keyboardType="numeric"
          onChangeText={(value) => setTileWidth(parseFloat(value))}
        />
      </View>
      <Button title="Calculate" onPress={calculateTilesNeeded} />
      {error && <Text style={styles.error}>{error}</Text>}
      {tilesNeeded !== null && (
        <Text style={styles.result}>Tiles Needed: {tilesNeeded}</Text>
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

export default TileCalculator;
