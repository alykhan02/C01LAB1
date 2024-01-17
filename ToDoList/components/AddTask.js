import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
  
    const handleAddTask = () => {
      if (title.trim() !== '') {
        onAddTask(title);
        setTitle('');
      }
    };
  
    return (
      <View style={styles.todoListContainer}>
        <TextInput
          placeholder="Enter your new todo"
          value={title}
          onChangeText={(text) => setTitle(text)}
          returnKeyType="done"
          style={styles.input}
        />
        <Button title="Add Todo" 
        onPress={handleAddTask} 
        style={styles.addTodoForm}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;