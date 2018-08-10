import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Logo from './components/logo';
import Gradbuttoncenter from './components/Gradbuttoncenter';

import Buttoncorrectwhite from './components/Buttoncorrectwhite';


export default class Landingpage extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {  
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
      
           <View style={styles.body}>
                    <Logo />
                    <Text style={styles.title}>Our Daily Manna</Text>
                    <Text style={styles.subtitle1}>Our daily manna is a fast and easy way</Text>
                    <Text style={styles.subtitle}>to keep informed about prayers, devotionals, etc..</Text>
                   
               
                    <Content>
                        <Form>
                            <Item floatingLabel last style={styles.inputorange}>
                                  <Label style={styles.white}>Email or Phone</Label>
                                  <Input />
                            </Item>
                            <Item floatingLabel last style={styles.inputorange}>
                                <Label style={styles.white}>Password</Label>
                                <Input    secureTextEntry={true} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Forgetpassword')}>
                                              <Text style={styles.white}>
                                                  Forgot Password?
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this.props.navigation.navigate('Dashboard')}>
                                       <Buttoncorrectwhite />
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
                   
            </View>


    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: null,
      height: null,
    },
      navigate:{
        flex:1,
        marginTop:80,
        marginLeft:30,
     },
     body:{
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        marginTop:100,
      },
     logo:{
        width:undefined,
        height:300,
     },
     title:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:35,
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
        marginBottom:55,

     },
     whitesignin:{
        color:'white',
        fontWeight:'600',
        alignSelf:'center',
        fontSize:23,
        marginTop:35,
        
     },
     button1: {
        borderWidth: 1,
        paddingTop: 25,
        paddingBottom: 25,
        padding:30,
        borderRadius:5,
        borderColor: '#d66c04',
        backgroundColor:'white',
        alignSelf:'center',
        shadowColor: '#d66c04',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      
  
     },
     whiteloan:{
        color:'#f27700',
        fontSize:20,
        fontWeight:'900'
      },

     
  
});




