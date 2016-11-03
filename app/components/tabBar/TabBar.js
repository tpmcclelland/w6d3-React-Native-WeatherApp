'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
  TextInput
} = ReactNative;
import CurrentDay from '../currentDay/CurrentDay'

class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'Current',
    notifCount: 0,
    presses: 0,
  };

  _renderCurrent= () => {
    return (
      <CurrentDay />
    )
  }

  _renderForecast= () => {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>64&deg; Cloudy Thursday</Text>
        <Text style={styles.tabText}>72&deg; Sunny Friday</Text>
        <Text style={styles.tabText}>75&deg; Partly Cloudy Saturday</Text>
        <Text style={styles.tabText}>74&deg; Cloudy Sunday</Text>
        <Text style={styles.tabText}>64&deg; Cloudy Monday</Text>
      </View>
    )
  }

  _renderSettings= () => {
    return (
      <View style={styles.tabContent}>
          <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.button}>Save</Text>
      </View>
    )
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="#BCF8FF"
        tintColor="white"
        barTintColor="#0096BC">
        <TabBarIOS.Item
          title="Current"
          icon={require('./day1.png')}
          selected={this.state.selectedTab === 'Current'}
          onPress={() => {
            this.setState({
              selectedTab: 'Current',
            });
          }}>
          {this._renderCurrent()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./day5.png')}
          // systemIcon="history"
          // badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          title="5 Day"
          selected={this.state.selectedTab === '5 Day'}
          onPress={() => {
            this.setState({
              selectedTab: '5 Day',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderForecast()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./settings.png')}
          // selectedIcon={require('./relay.png')}
          // renderAsOriginal
          title="Settings"
          selected={this.state.selectedTab === 'Settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'Settings',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderSettings()}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
    paddingTop: 100
  },
  tabText: {
    color: 'rgba(34, 133, 164, 1.00)',
    margin: 5,
    fontSize: 25
  },
  input: {
    marginLeft: 35,
    height: 40,
    width: 300,
    borderColor: 'rgba(34, 133, 164, 1.00)',
    borderWidth: 1
  },
    button: {
      textAlign: 'center',
      backgroundColor: 'rgba(34, 133, 164, 1.00)',
      color: 'white',
      fontSize: 30,
      marginTop: 20,
      height: 40,
      width: 300,
      borderColor: 'rgba(34, 133, 164, 1.00)',
      borderWidth: 1,
    }

});

module.exports = TabBar;
