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
import Nav from './global-widgets/nav'
import SwipeCards from 'react-native-swipe-cards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: Cards,
      cards2: Cards2,
      card: Cards[0],
      card2:Cards2[0],
      loop: true
    }
  }



  Card(x){
    return (
      <View style={styles.card}>
        <Image source ={x.image} resizeMode="contain" style ={{width:200, height:195}} />
      </View>
    )
  }

  _goToNextCard(cardGroupNo) {
    let currentCardIdx = this.state.cards.indexOf(this.state.card);
    let newIdx = currentCardIdx + 1;
    if(cardGroupNo === 1) {
      this.state.card.thumbup =  this.state.card.thumbup + 1;
      this.state.card.percent = Math.round(this.state.card.thumbup / (this.state.card.thumbup + this.state.card2.thumbup) * 100).toString() + "%"
      this.state.card2.percent = Math.round(this.state.card2.thumbup / (this.state.card.thumbup + this.state.card2.thumbup) * 100).toString() + "%"

    }
    if(cardGroupNo === 2){
      this.state.card2.thumbup = this.state.card2.thumbup + 1;
      this.state.card.percent = Math.round(this.state.card.thumbup / (this.state.card.thumbup + this.state.card2.thumbup) * 100).toString() + "%"
      this.state.card2.percent = Math.round(this.state.card2.thumbup / (this.state.card.thumbup + this.state.card2.thumbup) * 100).toString() + "%"
    }

    // Checks to see if last card.
    // If props.loop=true, will start again from the first card.
    let card = newIdx > this.state.cards.length - 1
      ? this.state.loop ? this.state.cards[0] : null
      : this.state.cards[newIdx];
    let card2 = newIdx > this.state.cards2.length - 1
      ? this.state.loop ? this.state.cards2[0] : null
      : this.state.cards2[newIdx];

    this.setState({
      card: card,
      card2:card2
    });
  }
  

  render() {
    return (
      <View style={styles.container}>
           <Nav chat = {() => this.props.navigator.replace({id: "messages"})} toProfile = {() => this.props.navigator.replace({id:'profile'})} />
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity  onPress = {() => this._goToNextCard(1)}>
          <Image style = {styles.image} source={this.state.card.image}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity  onPress = {() => this._goToNextCard(2)}>
          <Image style = {styles.image} source={this.state.card2.image}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.card2, { backgroundColor: '#A07CBF' }]}>
          <Makiko
            style={styles.input}
            label={'Comment'}
            iconClass={FontAwesomeIcon}
            iconName={'comment'}
            iconColor={'white'}
            inputStyle={{ color: '#A07CBF' }}
            on
          />
        </View>
      </View>
    )
}
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
  buttons:{
    width:80, 
    height:80, 
    borderWidth:10, 
    borderColor:'#e7e7e7', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:40,
  },
  image: {
    width:300, 
    height:250,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:20
  },
    card2: {
    marginTop:20
  }
 
});
