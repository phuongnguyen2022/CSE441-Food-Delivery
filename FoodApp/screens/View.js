// screens/ViewTasksScreen.js

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const API_URL = 'mongodb://8081/foodapp';

const ViewTasksScreen = ({navigation}) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error('Error fetching foods:', error);
    }
  };

  const deleteFood = async foodId => {
    try {
      await fetch(`${API_URL}/${foodId}`, {
        method: 'DELETE',
      });
      setFoods(foods.filter(food => food.id !== foodId));
    } catch (error) {
      console.error('Error deleting food:', error);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => deleteFood(item.id)} style={styles.item}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('UpdateFood', {foodId: item.id, food: item})
        }>
        <Text>Edit</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('AddFood')}
        style={styles.addButton}>
        <Text>Add Food</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
    marginBottom: 200,
  },
});

export default ViewTasksScreen;
