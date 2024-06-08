// screens/UpdateTaskScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const API_URL = 'mongodb://8081/foodapp';

const UpdateTaskScreen = ({ route, navigation }) => {
  const { taskId, taskText } = route.params;
  const [updatedTaskText, setUpdatedTaskText] = useState(taskText);

  const updateTask = async () => {
    try {
      await fetch(`${API_URL}/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: updatedTaskText }),
      });
      navigation.navigate('ViewTasks');
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Update Task</Text>
      <TextInput
        style={styles.input}
        value={updatedTaskText}
        onChangeText={text => setUpdatedTaskText(text)}
        placeholder="Enter updated task"
      />
      <TouchableOpacity onPress={updateTask} style={styles.updateButton}>
        <Text>Update Task</Text>
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
  updateButton: {
    backgroundColor: 'lightgreen',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default UpdateTaskScreen;
