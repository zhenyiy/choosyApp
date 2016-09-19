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

var image1_1 = require('../images/image1_1.jpg')
var image1_2 = require('../images/image1_2.jpg')
var image1_3 = require('../images/image1_3.jpg')
var image1_4 = require('../images/image1_4.jpg')
var image1_5 = require('../images/image1_5.jpg')
var image1_6 = require('../images/image1_6.jpg')
var image1_7 = require('../images/image1_7.jpg')

var image2_1 = require('../images/image2_1.jpg')
var image2_2 = require('../images/image2_2.jpg')
var image2_3 = require('../images/image2_3.jpg')
var image2_4 = require('../images/image2_4.jpg')
var image2_5 = require('../images/image2_5.jpg')
var image2_6 = require('../images/image2_6.jpg')
var image2_7 = require('../images/image2_7.jpg')

Cards = [{
  "id": 1,
  "image": image1_1,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 2,
  "image": image1_2,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 3,
  "image": image1_3,
  "thumbup": 0,
  "percent": "0%",
  "comments": "This one fits you very well!"
}, {
  "id": 4,
  "image": image1_4,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 5,
  "image": image1_5,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 6,
  "image": image1_6,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Too big..."
}, {
  "id": 7,
  "image": image1_7,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Too big..."
}]

Cards2 = [{
  "id": 1,
  "image": image2_1,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 2,
  "image": image2_2,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 3,
  "image": image2_3,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 4,
  "image": image2_4,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 5,
  "image": image2_5,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 6,
  "image": image2_6,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
}, {
  "id": 7,
  "image": image2_7,
  "thumbup": 0,
  "percent": "0%",
  "comments": "Really love it!"
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

