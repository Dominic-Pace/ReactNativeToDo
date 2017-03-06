import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return({
      tasks: [
        'Write Business Plan',
        'Create Pitch Decks',
        'Develop Zazu Prototype'
      ],
      completedTasks: [],
      task: ''
    })
  },

  renderList(tasks) {
    //return individual Views or rows based on the tasks.
    return(
      tasks.map((task, index) => {
        return (
          <View key={task} style={styles.task}>
            <Text>
              {task}
            </Text>
            <TouchableOpacity
              onPress={()=>this.completeTask(index)}
              >
              <Text>
                &#10003;
              </Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  },

  renderCompleted(tasks) {
    return (
      tasks.map((task, index) => {
        return (
          <View key={task} style={styles.task}>
            <Text style={styles.completed}>
              {task}
            </Text>
            <TouchableOpacity
              onPress={()=>this.removeCompletedTask(index)}
              >
              <Text>
                X
              </Text>
            </TouchableOpacity>
          </View>
        )
      })
    )
  },

  completeTask(index) {
    let tasks = this.state.tasks;
    tasks = tasks.slice(0, index).concat(tasks.slice(index + 1));

    let completedTasks = this.state.completedTasks;
    completedTasks = completedTasks.concat([this.state.tasks[index]]);

    this.setState({
      tasks,
      completedTasks
    });
  },

  removeCompletedTask(index) {
    let completedTasks = this.state.completedTasks;
    completedTasks = completedTasks.slice(0, index)
        .concat(completedTasks.slice(index + 1));

    this.setState({completedTasks});
  },

  addTask() {
    let tasks = this.state.tasks.concat([this.state.task]);
    this.setState({tasks})

  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          To-Do Master
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Add a task...'
          onChangeText={(text) => {
            this.setState({task: text})
            console.log(this.state.task);
          }}
          onEndEditing={()=>this.addTask()}
        />

        {this.renderList(this.state.tasks)}
        {this.renderCompleted(this.state.completedTasks)}
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    margin: 30,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18
  },

  task: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },

  input: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center',
    margin: 10
  },

  completed: {
    color: '#555',
    textDecorationLine: 'line-through'
  }
})
