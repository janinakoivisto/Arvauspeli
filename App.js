import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

export default function App() {

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Arvaa numero välillä 1-100');
  const [guesses, setGuesses] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess)) {
      setMessage('Arvauksen pitää olla numero');
      return;
    }
  
    setGuesses(guesses + 1);

    if (parsedGuess === randomNumber) {
      setMessage(`Arvasit oikein! Arvauksia yhteensä: ${guesses}`);
    } else if (parsedGuess < randomNumber) {
      setMessage('Arvauksesi on liian pieni');
    } else if (parsedGuess > randomNumber) {
      setMessage('Arvauksesi on liian suuri');
    }
  };

  const handleReset = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('Arvaa numero välillä 1-100');
    setGuesses(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Arvaa numero"
        value={guess}
        onChangeText={text => setGuess(text)}
      />
      <Button title="Arvaa" onPress={handleGuess} />
      <Button title="Aloita alusta" onPress={handleReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  feedback: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

