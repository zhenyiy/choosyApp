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
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Nav extends Component {

  home(){
    return (
      <View  style={styles.container}>
      <TouchableOpacity onPress ={this.props.toProfile}>
      <Image source = {require('../../images/upload.png')} style = {{width:25, height:25, margin:10}}/>
      </TouchableOpacity>
      <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />
      <TouchableOpacity onPress ={this.props.chat}>
      <Image source = {require('../../images/chat.png')} style = {{width:25, height:25, margin:10}}/>
      </TouchableOpacity>
      </View>
    );
  }
  profile(){
    return (
      <View  style={styles.container}>
      <View style = {{width:25, height:25, margin:10}}/>
      <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />
     <TouchableOpacity onPress ={this.props.onPress}>
      <Image source = {require('../../images/logo_icon.png')} style = {{width:25, height:25, margin:10}}/>
      </TouchableOpacity>
      </View>
    );
  }

    message(){
    return (
      <View  style={styles.container}>
      <TouchableOpacity onPress ={this.props.onPress}>
      <Image source = {require('../../images/logo_icon.png')} style = {{width:25, height:25, margin:10}}/>
      </TouchableOpacity>
      <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />
      <View style = {{width:25, height:25, margin:10}}/>
      </View>
    );
  }
  render() {
    if(this.props.type == "message"){
        return (
          <View>{this.message()}</View>
        );}
        else if (this.props.type == "profile"){
          return (
          <View>{this.profile()}</View>
        );
        }
        else{
        return (
          <View>{this.home()}</View>
        );}
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    paddingTop:10,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
});
