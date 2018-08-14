import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,Alert,Linking,TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
   

export default class Issue extends Component {
  constructor(props) {
    super(props);
    this.state={
        amount:"1000"
    }
  }
  
  _registerin() {
   
    Alert.alert('message sent','thanks for reaching out to us.')
  }
  render() {
 const { goBack } = this.props.navigation;
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container}>
                     <ImageBackground style={styles.header}  >
                                <TouchableOpacity style={styles.navigate}
                                 onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                   Contact us
                                </Text>
                                
                        </ImageBackground>
                        <View style={styles.body}>
                            <ScrollView>
                                 <Text style={styles.textbottom}>
                                    hey there, send us a message lets know how to improve. 
                                    </Text>
                                
                                    <Item floatingLabel  style={{justifyContent:'center',borderBottomColor:'brown'}} >
                                   <Input    keyboardType="number-pad" onChangeText={(text) => this.setState({amount:text})}
                                     />
                            </Item>
                                    
                        
                                    <TouchableOpacity style={[styles.button,]}
                                        onPress={() => this._registerin(this.state.amount)}>
                                    <Text style={styles.whiteloan} > Send </Text>
                                    </TouchableOpacity>
                            </ScrollView>
                        </View>      
                    
    </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f5f5f5',
    },
    icon:{
      color:'white',
      },
      navigate:{
      
        marginTop:70,
        marginLeft:30,
     },
     header:{
         flex:2,
         backgroundColor:'brown',

        },
     body:{
        flex:3,
        paddingTop:20,
        marginLeft:35,
        marginRight:35,
        flexDirection:'column',
        alignItems:'center' 
    },
    title:{
        marginLeft:30,
        fontSize:40,
        color:'white',
        marginBottom:15,
        marginTop:15,
    },
    subtitle:{
        marginLeft:30,
        marginTop:5,
        color:'white',
    },
    yippy:{
        width:undefined,
        height:230,
        },
        textbottom:{
            alignSelf:'center',
            color:'#c2cbd0',
            fontWeight:'400',
            fontSize:10,
      
        },
        button: {
            borderWidth: 1,
            paddingTop: 15,
            paddingBottom: 15,
            padding:15,
            borderRadius:5,
            borderColor: 'brown',
            backgroundColor:'brown',
            alignSelf:'flex-start',
            shadowColor: 'brown',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 8,
            marginTop:15,
            alignSelf:'center',
      
         },
         whiteloan:{
            color:'white',
            fontSize:18,
            fontWeight:'600'
          },
    
    
});




