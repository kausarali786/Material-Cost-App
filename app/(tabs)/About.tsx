import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image, ScrollView } from 'react-native';

export default function AboutUs() {
  const contactUs = (type: string) => {
    if (type === 'phone') {
      Linking.openURL('tel:+971507683621');
    } else if (type === 'email') {
      Linking.openURL('mailto:Costcalculatorinfo@gmail.com');
    }
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
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.paragraph}>
          Welcome to the Material Cost Calculator, your reliable partner in estimating construction material costs. We provide a variety of calculators to help you accurately budget for your construction projects, including brick, loft, paint, and tile calculators.
        </Text>

        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.paragraph}>
          Our mission is to simplify the construction planning process by offering easy-to-use, accurate tools that help you estimate material costs efficiently.
        </Text>

        <Text style={styles.subtitle}>Our Story</Text>
        <Text style={styles.paragraph}>
          The Material Cost Calculator was developed by a team of construction professionals and software developers who recognized the need for reliable, user-friendly tools in the industry. We are committed to continuous improvement and value your feedback.
        </Text>

        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions, suggestions, or need assistance, please feel free to contact us:
        </Text>
        
        <TouchableOpacity onPress={() => contactUs('phone')}>
          <Text style={styles.contactLink}>Phone: +(971) 507683621</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => contactUs('email')}>
          <Text style={styles.contactLink}>Email: Costcalculatorinfo@gmail.com</Text>
        </TouchableOpacity>
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
  paragraph: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  contactLink: {
    color: '#007BFF',
    fontSize: 16,
    marginVertical: 5,
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