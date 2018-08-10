import React, { Component } from 'react';
import {Linking, Alert, View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,AsyncStorage,  } from 'react-native';
import { Drawer, Container,Button, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import { DrawerNavigator, DrawerActions } from "react-navigation";
 import Meunbutton from './components/Meunbutton';
import Dashboardicon from './components/Dashboardicon';


export default class Dashboard extends Component {
 
  constructor(props) {
    super(props);
      this.state = {
      email: '',
    
    }
  }
  componentDidMount(){
      
    AsyncStorage.getItem("email").then((value) => {
        this.setState({"email":value})
      }).done();
     
  
 
  }
  _registerin(){  

      Linking.openURL(`https://ourdailydevotional.herokuapp.com/subscribe/pay/${this.state.email}`)
   }
       
  render() {  
    
 const { navigate } = this.props.navigation;
    return (
       <View
      style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
              onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                  <Icon name="menu" style={{color:'brown'}} />
             
             </TouchableOpacity>

            <View style={styles.contentid}> 
                   <Dashboardicon/>
                    <Text style={styles.yippytextsub}>
                        You currently have no subcription to ODM. 
                        
                    </Text>
                    <Text style={styles.yippytextsub}>Subscribe now</Text>
           
                    <Button style={styles.button}
                      onPress={() => this._registerin()}>
                        <Text style={styles.whiteloan} >Make Payments</Text>
                    </Button>

                
                    <View style={styles.hold}>
                            <Text style={styles.orange}> Daily devotional </Text>
                    </View>
                    <View style={styles.recenttransaction}>
                            <Text style={styles.ash}>This section is unavaliable to you. </Text>
                            <Text style={styles.ash}> Subscribe now to enjoy. </Text>
                    </View>

          </View>
         
     </View>
  
    );
  }
}

const styles = StyleSheet.create({
    stacktab:{
        backgroundColor: '#fff',
        shadowColor: '#c2cbd0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
      
    },  
    stackicon:{
        width:50,
        height:30,
        marginTop:20,
     },
     stacktext:{
        color:'#424d54',
       marginTop:0,
    },
    stacktextactive:{
        color:'#d66c04',
       marginTop:0,
    },
  container:{
      flex: 1,
      backgroundColor:'white',
    },
    yippy:{
      width:undefined,
      height:200,
      },
      yippytext:{
        fontSize:20,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
        marginTop:1,
        marginBottom:15,
        alignSelf:'center',
        letterSpacing:1,
       
  
      },
      yippytextsub:{
        fontSize:15,
        color:'#666',
        fontWeight:'400',
        letterSpacing:1,
        alignSelf:'center',
      },
      navigate:{
        marginTop:50,
        marginLeft:30,
     },
     contentid:{
      flex:7,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:35,
        color:'white',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:12,
        color:'white',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
        color:'white',
      },
   
      hold: {
        flexDirection: 'row',
        marginTop:35,
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
      marginLeft:50,
      marginRight:50,
      borderTopColor: 'white',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
        borderColor:'#d66c04',
    },
     orange:{
        color:'brown',
    },
    button: {
        marginTop:20,
        borderWidth: 1,
        padding: 5,
        borderColor: 'brown',
        backgroundColor:'brown',
        alignSelf:'center',
        shadowColor: 'brown',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
     },
     whiteloan:{
        color:'white',
        fontSize:20,
        paddingLeft:10,
        paddingRight:10,
        fontWeight:'600'
      },
      recenttransaction:{
        marginTop:35,
      },
      ash:{
          alignSelf:'center',
          color:'#c2cbd0',
          fontSize:15,
      },

});




