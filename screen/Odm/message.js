import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,Alert,Linking,TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
   

export default class odmmessag extends Component {
  constructor(props) {
    super(props);
    this.state={
        
    }
  }
  
  render() {
 const { goBack } = this.props.navigation;
 const { navigation } = this.props;
    const title = navigation.getParam('title');
    const conclusion = navigation.getParam('conclusion');
    const prayer = navigation.getParam('prayer');
    const message = navigation.getParam('message');
    const month = navigation.getParam('month');
       const day = navigation.getParam('day');
      const year = navigation.getParam('year');

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container}>
                     <ImageBackground style={styles.header}  >
                                <TouchableOpacity style={styles.navigate}
                                 onPress={() => goBack()} >
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                   {JSON.stringify(title)}
                                </Text>
                                <Text style={styles.title} > 
                                   {day}-{month}-{year}
                                </Text>
                                
                        </ImageBackground>
                        <View style={styles.body}>
                            <ScrollView>
                                
                                
                                         <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    Message
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                                  {JSON.stringify(message)}
                                                                              </Text>
                                                                         </View>
                                                              </View>


                                         <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    Conclusion
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                                  {JSON.stringify(conclusion)}
                                                                              </Text>
                                                                         </View>
                                                              </View>
                                
                                         <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    Prayer
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                                  {JSON.stringify(prayer)}
                                                                              </Text>
                                                                         </View>
                                                              </View>
                                
                                
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
      
        marginTop:15,
        marginLeft:30,
     },
     header:{
         flex:2,
         backgroundColor:'brown',

        },
     body:{
        flex:3,
        paddingTop:1,
        marginLeft:35,
        marginRight:35,
        flexDirection:'row',
        
    },
    title:{
        marginLeft:30,
        fontSize:20,
        color:'white',
        marginBottom:15,
        marginTop:5,
        alignSelf:'center'
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




