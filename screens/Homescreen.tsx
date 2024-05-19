import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.text}>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
});

export default HomeScreen;
