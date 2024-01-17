import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ tasks }) => {
    const [toDos, setToDos] = useState(tasks.map((value) => ({ id: uuidv4(), title: value })));
    
    const addToDo = (newTitle) => {
        const newToDoItem = { id: uuidv4(), title: newTitle };
        setToDos((prevToDos) => [...prevToDos, newToDoItem]);
    };

    const removeToDo = (id) => {
        setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
    };

    return (
        <View style={styles.container}>
        {toDos.map((toDo) => (
            <View key={toDo.id} style={styles.todoListContainer}>
                <Text style={styles.todoItem}>{toDo.title}
                <Button
                        title="Remove"
                        onPress={() => removeToDo(toDo.id)}
                        color="#841584"
                    />
                </Text>
            </View>
        ))}
        <AddTask onAddTask={addToDo}/>
        </View>

    );
  };

  ToDoList.defaultProps = {
    tasks: [],
  };

  const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

 

export default ToDoList;