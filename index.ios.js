/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './app/components/header/Header'
// import Main from './app/components/main/Main'
import TabBar from './app/components/tabBar/TabBar'

export default class WeatherApp extends Component {
  constructor(props) {
    super(props)
    this._updateWeatherData = this._updateWeatherData.bind(this)
    this.state = {}
  }

  componentDidMount() {
      //
      // var api = {
      //     base: 'http://api.openweathermap.org/data/2.5/weather?',
      //     city: 'indianapolis',
      //     appId: 'e54f5549bbe573caa95441e42a6fad59'
      // }
      //
      // // fetch api data
      // // fetch(`${api.base}q=${api.city}&APPID=${api.appId}`)
      // fetch(`https://facebook.github.io/react-native/movies.json`)
      // .then(response => response.json())
      // .then(this._updateWeatherData)
      // .catch((error) => {
      //   console.error(error)
      // })
  }

  _updateWeatherData(data) {
    // console.error(data)
    // this.setState({
    //   data: data
    // })
    //grab temp (format kelvin) and condition
    //set state
    // var temp = this.convertKelvinToFahrenheit(data.main.temp)
    // var condition = {}
    //
    // data.weather.forEach(function(item) {
    //     condition.description = item.main
    //     condition.icon = `owf owf-${item.id} owf-2x`
    // })
    //
    // this.state({
    //     temp: temp,
    //     condition: condition
    // })

}

convertKelvinToFahrenheit(kelvin) {
    return Math.round(kelvin * (9/5) - 459.67)
}

  render() {
    return (

      <View style={styles.container}>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} /> */}
        <Header style={styles.header}/>
        {/* <View style={styles.header} /> */}
        {/* <Main style={styles.main} /> */}
        {/* {this.state.data} */}
        <TabBar style={styles.footer}/>
      </View>

      //   {/* <LinearGradient colors={['#0096BC', '#BCF8FF']}>
      //   </LinearGradient> */}

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(188, 248, 255, 1.00)',
  },
  header: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  main: {
    flex: 3,
    backgroundColor: 'skyblue',
  },
  footer: {
    flex: 4,
    backgroundColor: 'steelblue'
  }
})

AppRegistry.registerComponent('WeatherApp', () => WeatherApp)
