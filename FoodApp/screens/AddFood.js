// screens/AddFoodScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const API_URL = 'mongodb://8081/foodapp';

const AddFoodScreen = ({ navigation }) => {
  const [food, setFood] = useState({
    id: '',
    name: '',
    images: '',
    price: '',
    timeToCook: '',
    ingredients: '',
    note: ''
  });

  const addFood = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
      });
      if (response.ok) {
        navigation.navigate('ViewFoods');
      } else {
        console.error('Failed to add food');
      }
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Food</Text>
      <TextInput
        style={styles.input}
        value={food.name}
        onChangeText={text => setFood({...food, name: text})}
        placeholder="Enter name"
      />
      <TextInput
        style={styles.input}
        value={food.images}
        onChangeText={text => setFood({...food, images: text})}
        placeholder="Enter image URL"
      />
      <TextInput
        style={styles.input}
        value={food.price}
        onChangeText={text => setFood({...food, price: text})}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={food.timeToCook}
        onChangeText={text => setFood({...food, timeToCook: text})}
        placeholder="Enter time to cook"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={food.ingredients}
        onChangeText={text => setFood({...food, ingredients: text})}
        placeholder="Enter ingredients"
      />
      <TextInput
        style={styles.input}
        value={food.note}
        onChangeText={text => setFood({...food, note: text})}
        placeholder="Enter note"
      />
      <TouchableOpacity onPress={addFood} style={styles.addButton}>
        <Text>Add Food</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default AddFoodScreen;
