import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Warning', 'Please enter both username and password.');
    } else if (username === 'user' && password === 'abc@123') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Wrong username or password. Please try again.');
      setUsername('');
      setPassword('');
    }
  };

  const handleSignUp = () => {
    // Navigate to the signup screen
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../assets/background-login.png')} // Replace with your image path
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          value={password}
        />
        <Button title="Login" onPress={handleLogin} />

        <Text style={styles.signupText}>
          Don't have an account? 
          <Text style={styles.signupLink} onPress={handleSignUp}> Register Here!</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' for different image behaviors
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Text color on top of the background image
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white', // Input field background color
    opacity: 0.8, // Adjust opacity as needed
  },
  signupText: {
    marginTop: 20,
    color: 'white', // Text color on top of the background image
  },
  signupLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Login;
