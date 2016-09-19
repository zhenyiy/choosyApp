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
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';


export default class Messages extends Component {
  constructor(props){
    super(props)

    this.state = {
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
      <Text style = {{color:'#A07CBF', fontWeight:'600', fontSize:12}}>CHECK OUT HOW OTHERS CHOOSE FOR YOU</Text>
      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
      <Image source = {Cards[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards[0].percent}</Text>
      </View>
      <View>
        <Image source={require('../images/vs3.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards2[0].percent}</Text>
      </View>
        <Image source = {Cards2[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
      <Image source = {Cards[2].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards[2].percent}</Text>
      </View>
      <View>
        <Image source={require('../images/vs3.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
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
        <Image source={require('../images/vs3.png')} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </View>
      <View>
        <Text style={{fontSize:24,fontWeight:'bold', color:'#111'}}>{Cards2[4].percent}</Text>
      </View>
        <Image source = {Cards2[4].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      </TouchableOpacity>


      </View>
      <View style = {{margin:10}}>
      <Text style = {{color:'#A07CBF', fontWeight:'600', fontSize:12}}>COMMENTS</Text>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
        <Image source = {Cards[0].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontWeight:'600', color:'#111'}}>Likes: {Cards[0].thumbup}</Text>
        <Text 
          numberOfLines ={1}
          style={{fontWeight:'400', color:'#888', width:200}}>{Cards[0].comments}</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
        <Image source = {Cards[2].image} style={{width:70, height:70, borderRadius:35, margin:10}} />
      <View>
        <Text style={{fontWeight:'600', color:'#111'}}>Likes: {Cards[2].thumbup}</Text>
        <Text 
          numberOfLines ={1}
          style={{fontWeight:'400', color:'#888', width:200}}>{Cards[2].comments}</Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity style={{alignItems:'center', flexDirection:'row', marginTop:5, marginBottom:5}}>
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
  paddingTop:15, 
  borderTopColor:'#A07CBF',
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
