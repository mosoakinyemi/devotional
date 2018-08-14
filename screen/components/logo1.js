import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';


export default class logo extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
            <Image style={styles.btn} source={require('../assets/odm.png')}/>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
      
  width:120,
  height:120,
  alignSelf:'center',
  
    }
});




