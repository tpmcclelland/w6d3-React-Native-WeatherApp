import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import moment from 'moment'


export default class CurrentDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '84',
      condition: 'Rainy',
      img: './app/img/rain.svg'
    }
  }

  render() {
    var date = moment().format('MMMM Do YYYY [at] h:mm a')

    return <View style={styles.main}>
            <Text style={styles.temp}>{this.state.temp}&deg;</Text>
            <Text style={styles.condition}>{this.state.condition}</Text>
            <Image source={require('./rain.png')} style={styles.image}/>
          </View>
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 50
  },
  temp: {
    color: 'rgba(34, 133, 164, 1.00)',
    textAlign: 'center',
    fontSize: 125
  },
  condition: {
    color: 'rgba(60, 149, 168, 1.00)',
    textAlign: 'center',
    fontSize: 60
  },
  image: {
    width: 100,
    height: 100
  }
})
