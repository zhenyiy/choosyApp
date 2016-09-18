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
  TextInput,
  TouchableOpacity,
  ScrollView,
  ListView,
  View
} from 'react-native';

import Nav from './global-widgets/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

var image1 = require('../images/image1.jpeg')
var image2 = require('../images/image2.jpeg')
var image3 = require('../images/image3.jpeg')
var image4 = require('../images/image4.jpeg')
var image5 = require('../images/image5.jpeg')
var image6 = require('../images/image6.jpeg')
var image7 = require('../images/image7.jpeg')
var image8 = require('../images/image8.jpeg')
var image9 = require('../images/image9.jpeg')
var image10 = require('../images/image10.jpeg')
var image11 = require('../images/image11.jpeg')



var convos = [{
  "id": 1,
  "name": "Diane",
  "message": "Suspendisse accumsan tortor quis turpis.",
  "image" : image1,
  "comments": "Really love it!"
}, {
  "id": 2,
  "name": "Lois",
  "message": "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  "image" : image2
}, {
  "id": 3,
  "name": "Mary",
  "message": "Duis bibendum.",
  "image" : image3
}, {
  "id": 4,
  "name": "Susan",
  "message": "Praesent blandit.",
  "image" : image4
}, {
  "id": 5,
  "name": "Betty",
  "message": "Mauris enim leo, rhoncus sed, vestibulum, cursus id, turpis.",
  "image" : image5
}, {
  "id": 6,
  "name": "Deborah",
  "message": "Aliquam sit amet diam in magna bibendum imperdiet.",
  "image" : image6
}, {
  "id": 7,
  "name": "Frances",
  "message": "Phasellus sit amet erat.",
  "image" : image7
}, {
  "id": 8,
  "name": "Joan",
  "message": "Vestibulum ante ipsum bilia Curae; Duis faucibus accumsan odio.",
  "image" : image8
}, {
  "id": 9,
  "name": "Denise",
  "message": "Aliquam non mauris.",
  "image" : image9
}, {
  "id": 10,
  "name": "Rachel",
  "message": "Nulla ac enim.",
  "image" : image10
}]

var newMatches = [{
  "id": 1,
  "first_name": "Sarah",
  "image" : image7
}, {
  "id": 2,
  "first_name": "Pamela",
  "image" : image8
}, {
  "id": 3,
  "first_name": "Diana",
  "image" : image9
}, {
  "id": 4,
  "first_name": "Christina",
  "image" : image10
}, {
  "id": 5,
  "first_name": "Rebecca",
  "image" : image11
}, {
  "id": 6,
  "first_name": "Wanda",
  "image" : image5
}, {
  "id": 7,
  "first_name": "Sara",
  "image" : image6
}, {
  "id": 8,
  "first_name": "Judith",
  "image" : image7
}, {
  "id": 9,
  "first_name": "Ruby",
  "image" : image1
}, {
  "id": 10,
  "first_name": "Sandra",
  "image" : image11
}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Messages extends Component {
  constructor(props){
    super(props)

    this.state = {
      dataSource: ds.cloneWithRows(newMatches),
      convoData: ds.cloneWithRows(convos),
    }

  }
  
  eachPic(x){
    return(
      <TouchableOpacity style={{alignItems:'center'}}>
      <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <Text style={{fontWeight:'600', color:'#444'}}>{x.first_name}</Text>
      </TouchableOpacity>
      )}

    convoRender(x){
      return(
              <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
              <Image source = {x.image} style={{width:70, height:70, borderRadius:35, margin:10}} />
              <View>
              <Text style={{fontWeight:'600', color:'#111'}}>{x.name}</Text>
              <Text 
              numberOfLines ={1}
              style={{fontWeight:'400', color:'#888', width:200}}>{x.message}</Text>
              </View>
              </TouchableOpacity>)}

   
  render() {
    return (
      <View style = {{flex:1}}>
      <Nav type = 'message' onPress = {() => this.props.navigator.replace({id:'home'})} />
      <ScrollView style={styles.container}>
      <View style={styles.matches}>
      <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>CHECK OUT HOW OTHERS CHOOSE FOR YOU</Text>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
      <Image source = {Cards[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards[0].percent}</Text>
      </View>
      <View>
        <Image source={require('../images/vs.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards2[0].percent}</Text>
      </View>
        <Image source = {Cards2[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
      <Image source = {Cards[2].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards[2].percent}</Text>
      </View>
      <View>
        <Image source={require('../images/vs.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards2[2].percent}</Text>
      </View>
        <Image source = {Cards2[2].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </TouchableOpacity>


      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
      <Image source = {Cards[4].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards[4].percent}</Text>
      </View>
      <View>
        <Image source={require('../images/vs.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards2[4].percent}</Text>
      </View>
        <Image source = {Cards2[4].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </TouchableOpacity>


      </View>
      <View style = {{margin:10}}>
      <Text style = {{color:'#da533c', fontWeight:'600', fontSize:12}}>COMMENTS</Text>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
        <Image source = {Cards[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontWeight:'600', color:'#111'}}>Likes: {Cards[0].thumbup}</Text>
        <Text 
          numberOfLines ={1}
          style={{fontWeight:'400', color:'#888', width:200}}>{Cards[0].comments}</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
        <Image source = {Cards[2].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontWeight:'600', color:'#111'}}>Likes: {Cards[2].thumbup}</Text>
        <Text 
          numberOfLines ={1}
          style={{fontWeight:'400', color:'#888', width:200}}>{Cards[2].comments}</Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5, borderBottomWidth:1, borderColor:'#e3e3e3'}}>
        <Image source = {Cards[5].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontWeight:'600', color:'#111'}}>Likes: {Cards[5].thumbup}</Text>
        <Text 
          numberOfLines ={1}
          style={{fontWeight:'400', color:'#888', width:200}}>{Cards[5].comments}</Text>
      </View>
      </TouchableOpacity>

      </View>     
        </ScrollView>
        </View>
    )
}
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10

  },
  matches:{
  borderTopWidth:1,
  paddingTop:15, 
  borderTopColor:'#da533c',
  borderBottomWidth:1,
  paddingBottom:15, 
  borderBottomColor:'#e3e3e3'
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#fff', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40
  },
  buttonSmall:{
    width:50, 
    height:50, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }
 
});
