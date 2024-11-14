import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {
  const getMaterialRecommendations = (userInput: string) => {
    // Function to handle material recommendations
    // Implement the logic to fetch or display suggestions based on user input
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Image source={require('./assets/removedBG.png')} style={styles.logoImage} />
        </View>
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Calculators</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Cost Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Material Suggestions</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Material Cost Calculator</Text>
        <Text style={styles.description}>Choose a calculator to estimate your material costs.</Text>

        <View style={styles.calculatorBox}>
          <TouchableOpacity style={styles.calculatorButton}>
            <Text style={styles.buttonText}>Brick Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculatorButton}>
            <Text style={styles.buttonText}>Loft Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculatorButton}>
            <Text style={styles.buttonText}>Paint Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calculatorButton}>
            <Text style={styles.buttonText}>Tile Calculator</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.suggestionText}>
          If you want to explore alternative materials for your project, check out our 
          <Text style={styles.link}> Material Suggestions</Text> page!
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2024 Material Cost Calculator. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#143557ff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    paddingVertical: 10,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  calculatorBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  calculatorButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  suggestionText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 20,
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
});