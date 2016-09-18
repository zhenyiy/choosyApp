/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';

import Home from './home';
import Messages from './messages';
import Profile from './profile';

var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')
var image6 = require('../images/image6.jpeg')


Cards = [{
  "id": 1,
  "image": image1,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 2,
  "image": image2,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 3,
  "image": image3,
  "thumbup": 0,
  "percent": "0%",
  "comments": "This one fits you very well!"
}, {
  "id": 4,
  "image": image4,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 5,
  "image": image5,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 6,
  "image": image6,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Too big..."
}]

Cards2 = [{
  "id": 1,
  "image": image6,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 2,
  "image": image5,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 3,
  "image": image4,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 4,
  "image": image3,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 5,
  "image": image2,
  "thumbup": 0,
  "percent": "0%"
}, {
  "id": 6,
  "image": image1,
  "thumbup": 0,
  "percent": "0%"
}]





export default class Index extends Component {
  constructor(props){
    super(props)
 
  }
 
  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        userData ={route.userData}
        navigator={navigator} />
        );
    }
    if (routeId === 'messages') {
      return (
        <Messages
        {...this.props} 
        userData ={route.userData}
        navigator={navigator}
        Cards={Cards}
        Cards2={Cards2} />
        );
    }
    if (routeId === 'profile') {
      return (
        <Profile
        {...this.props} 
        userData ={route.userData}
        navigator={navigator}
        Cards={Cards}
        Cards2={Cards2} />
        );
    }
  }


  render() {
    return (
      <View style={{flex:1}}>
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'home', name: 'home'}}
     renderScene={this.renderScene.bind(this)}/>
        </View>
    )
}
}

