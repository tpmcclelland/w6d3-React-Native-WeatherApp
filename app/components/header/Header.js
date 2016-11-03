import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import moment from 'moment'


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'Indianapolis'
    }
  }

  render() {
    var date = moment().format('MMMM Do YYYY [at] h:mm a')

    return <View style={styles.header}>
            <Text style={styles.city}>{this.state.city}</Text>
            <Text style={styles.datetime}>{date}</Text>
          </View>
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50
  },
  city: {
    color: 'rgba(34, 133, 164, 1.00)',
    textAlign: 'center',
    fontSize: 30
  },
  datetime: {
    color: 'rgba(60, 149, 168, 1.00)',
    textAlign: 'center',
    fontSize: 15
  }
})
