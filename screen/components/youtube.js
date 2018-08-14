import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';


export default class Dashboardicon extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
            <Image style={styles.btn} source={require('../assets/youtube.png')}/>
    );
  }
}

const styles = StyleSheet.create({
    btn:{
      
      width:30,
      height:30,
      alignSelf:'center'
    

    }
});




