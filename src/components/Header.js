import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text style={styles.greenText}>$ Crypto-</Text>Tracker $</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: '10%',
    alignItems: 'center',
    paddingBottom: '4%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  greenText: {
    color: '#588348',
  }
});

export default Header;