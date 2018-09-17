import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,AsyncStorage,TouchableOpacity, KeyboardAvoidingView,Alert,ActivityIndicator } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttoncorrectwhite from './components/Buttoncorrectwhite';
import Logo from './components/logo1';
import Face from './components/facebook';
import Twitter from './components/twitter';
import Whatsapp from './components/whatsapp';
import Youtube from './components/youtube';
import Insta from './components/instagram';


export default class Signin extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: '',
      password: '',
      ans:'',
      isLoading: false,
    }
  }
 
  render() {  
    const { goBack } = this.props.navigation;

    return (
     
         <ImageBackground style={{flex: 1, padding: 20,justifyContent:'center',alignContent:'center'}} source={require('./assets/bgcover.jpg')} >
     
    
            <TouchableOpacity style={styles.navigate}
             >
             </TouchableOpacity>

            <View style={styles.contentid}> 
                  < KeyboardAvoidingView behavior="position">
                  <Logo />
                          <Text style={styles.title}>Affecting Lives</Text>
                          <Text style={styles.title}>Touching Generations</Text>
                            
                         
                             <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                         >
                                              <Text style={styles.white}>
                                                 
                                              </Text>  
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                          >
                                        
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>

   

                            <View style={{flexDirection:'row',justifyContent:'center',}}>
                                  <View >
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Signin')}
                                         style={{backgroundColor:'brown', padding:25,paddingBottom:10,paddingTop:10,borderRadius:2,}}>
                                              <Text style={{color:'white'}}>
                                               Login/ Sign-in
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                               
                                 
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
                                  <View >
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Signup')}
                                         style={{backgroundColor:'brown', padding:25,paddingBottom:10,paddingTop:10,borderRadius:2,}}>
                                              <Text style={{color:'white'}}>
                                                Create Account
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                               
                                 
                            </View>
                            </KeyboardAvoidingView>
          </View>
          <View style={styles.footer}>
          <Face/>
          <Twitter/>
          <Whatsapp/>
          <Youtube/>
          <Insta/>
           </View>
          
 
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   
    container:{
      flex: 1,
      width: null,
      height: null,
    },
    icon:{
      color:'white',
      },
      navigate:{
        flex:1,
        marginTop:15,
        marginLeft:30,
     },
     contentid:{
      flex:9,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:35,
        color:'white',
        fontWeight:'900',
      },
      title:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:15,
        marginBottom:10,
     },
     subtitle1:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:15,
      

     },
     subtitle:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:15,
        marginBottom:1,

     },
      titlesub:{
        fontSize:12,
        color:'brown',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:5,
        marginBottom:5,
      },
      white:{
        color:'brown',
      },
      hold: {
        flexDirection: 'row',
        marginTop:10,
        },
      inner: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        flex:1,
      },
        inner1: {
        flex:1,
        width: 50,
        height: 50,
      },
      checkbox:{
        alignItems: 'flex-end',
      },
    footer:{
      flex:1,
      flexDirection:'row',
      marginLeft:50,
      marginRight:10,
    justifyContent:'flex-end',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
      borderColor:'brown',
  },
  inputorange:{
    color:'brown',
    borderColor:'brown'
  }
});




