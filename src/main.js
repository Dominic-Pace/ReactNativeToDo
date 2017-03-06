import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return({
      tasks: ['Take out the trash', 'Get Groceries', 'Practice Piano']
    })
  },

  renderList(tasks) {
    //return individual Views or rows based on the tasks.
    return(
      tasks.map((task) => {
        return (
          <View key={task} style={styles.task}>
            <Text>
              {task}
            </Text>
          </View>
        )
      })
    )
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          To-Do Master
        </Text>
        {this.renderList(this.state.tasks)}
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
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'

  }
})
