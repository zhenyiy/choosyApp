/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  PixelRatio,
  Image,
  NativeModules,
  Dimensions} from 'react-native';

import Video from 'react-native-video';

var ImagePicker = NativeModules.ImageCropPicker;
var {height, width} = Dimensions.get('window');
import Nav from './global-widgets/nav'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  row: {
    flexDirection:'row',
    margin:15,
    marginBottom:0,
    marginTop:5,
    alignItems:'flex-end'
  },
  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  },
  button: {
    marginTop:3,
    width:300, 
    height:20, 
    borderWidth:1, 
    borderColor:'#A07CBF', 
    justifyContent:'center', 
    alignItems:'center',
    borderRadius:18,
    backgroundColor: '#A07CBF',
    marginBottom:2
  },
  image: {
    width:300, 
    height:250,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius:5
  }

});

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      friends: 1098
    };
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping,
      width: 500,
      height: 500
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  pickSingleBase64(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      includeBase64: true
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: `data:${image.mime};base64,`+ image.data, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }

  cleanupImages() {
    ImagePicker.clean().then(() => {
      console.log('removed tmp images from tmp directory');
    }).catch(e => {
      alert(e);
    });
  }

  cleanupSingleImage() {
    let image = this.state.image || (this.state.images && this.state.images.length ? this.state.images[0] : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null).then(() => {
      console.log(`removed tmp image ${image.uri} from tmp directory`);
    }).catch(e => {
      alert(e);
    })
  }

  pickSingle(cropit) {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      compressVideo: true
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        images: null
      });
    }).catch(e => {
      console.log(e.code);
      alert(e);
    });
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      width: 300,
      height: 250
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderVideo(uri) {
    return <View style={{height: 300, width: 300}}>
      <Video source={{uri}}
         style={{position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
          }}
         rate={1}
         paused={false}
         volume={1}
         muted={false}
         resizeMode={'cover'}
         onLoad={load => console.log(load)}
         onProgress={() => {}}
         onEnd={() => { console.log('Done!'); }}
         repeat={true} />
     </View>;
  }

  renderImage(image) {
    return <Image style={styles.image} source={image} />
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image.uri);
    }

    return this.renderImage(image);
  }

  render() {
    return <View style={styles.container}>
      <Nav  type = "profile" onPress = {() => this.props.navigator.replace({id:'home'})} />
      <ScrollView>
        <View  style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        {this.state.image ? this.renderAsset(this.state.image) : null}
        </View>
        <View  style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
        </View>
      </ScrollView>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={styles.button}>
        <Text style={styles.text}>Select Two Photos</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity onPress={this.cleanupImages.bind(this)} style={styles.button}>
        <Text style={styles.text}>Submit Photos</Text>
      </TouchableOpacity>
      </View>
    </View>;
  }
}
