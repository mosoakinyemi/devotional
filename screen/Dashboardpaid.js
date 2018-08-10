import React, { Component } from 'react';
import {Linking, Alert, View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,AsyncStorage, ScrollView } from 'react-native';
import { Drawer, Container,Button, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import { DrawerNavigator, DrawerActions } from "react-navigation";
 import Meunbutton from './components/Meunbutton';
import Dashboardicon from './components/Dashboardiconlg';


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

 Alert.alert('Hey there!','it seems there is not current live stream at this time. Check back later, Thanks.');

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
                        Welcome back to ODM. 
                        
                    </Text>
                    <Text style={styles.yippytextsub}>Check Live Stream</Text>
           
                    <Button style={styles.button}
                    onPress={()=> this._registerin()} >
                        <Text style={styles.whiteloan} >Live Stream</Text>
                    </Button>

                
                    <View style={styles.hold}>
                            <Text style={styles.orange}> Our Daily Manna </Text>
                    </View>
<ScrollView>
                    <View style={styles.recenttransaction}>
                            <Text onPress={()=> this.props.navigation.navigate('odm')} style={styles.ash}> <Icon name="ios-bookmark" style={{color:'brown',}} />  Devotional </Text>
                             
                    </View>
                    <View style={styles.recenttransaction1}>
                            <Text onPress={()=> this.props.navigation.navigate('fb')} style={styles.ash}> <Icon name="ios-bookmark" style={{color:'brown',}} />  Faith Boosters </Text>
                             
                    </View>
                   <View style={styles.recenttransaction1}>
                            <Text onPress={()=> this.props.navigation.navigate('p')} style={styles.ash}> <Icon name="ios-bookmark" style={{color:'brown',}} />  Unfailling Promise </Text>
                             
                    </View>
                        <View style={styles.recenttransaction1}>
                            <Text style={styles.ash}> <Icon name="ios-bookmark" style={{color:'brown',}} />  Audio Tracks </Text>
                             
                    </View>
                        <View style={styles.recenttransaction1}>
                            <Text onPress={()=> this.props.navigation.navigate('Prayers')} style={styles.ash}> <Icon name="ios-bookmark" style={{color:'brown',}} />  Prayers </Text>
                             
                    </View>
                 
                    </ScrollView>
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
        justifyContent:'flex-start',
           borderBottomColor: 'brown',
      borderColor:'transparent',
      borderWidth: 1,
      },
        recenttransaction1:{
        marginTop:15,
        justifyContent:'flex-start',
           borderBottomColor: 'brown',
      borderColor:'transparent',
      borderWidth: 1,
      },
      ash:{
          alignSelf:'flex-start',
          color:'brown',
          fontSize:20,
          paddingBottom:15,
            
      },

});




