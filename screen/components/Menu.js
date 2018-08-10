import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,TouchableOpacity  } from 'react-native';
import { Container,Button,DrawerHeader,List,ListItem,Left,Body, Footer, FooterTab, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';
const routes = ["Dashboard", "Profile", "Prayers","Events", "Dashboard","Referral","Issue","Logout","About"];
export default class Menu extends Component {
     
    constructor(props) {
        super(props);
      }
      
    
  render() {  
    return (
        <Content style={{backgroundColor:'#FFFFFF',flexDirection:'column'}}>
       
       
       <View style={styles.drawerheader}>     
                     <View style={styles.hold}>
                                 <View style={styles.inner}>
                                        <TouchableOpacity style={styles.checkbox}
                                            onPress={() => this.props.navigation.navigate('Profile')}        >
                                            <Icon active name='ios-person' style={{fontSize:50,color:'brown'}}   />
                                        </TouchableOpacity>
                                        <Text style={styles.leadtitle}>
                                                   View Profile
                                              </Text>
                                  </View>
                                   
                        </View>

       </View>
       <View style={styles.drawerbody}>     
         <List>
         <ListItem icon noBorder  >
                <Left>
                <Icon name="ios-home"  style={styles.stackicon}/>
             </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.navigate('Dashboard')}
                style={styles.stacktext}  >Home</Text>
                </Body>
              </ListItem>

             <ListItem icon noBorder  >
                <Left>
                <Icon name="ios-bookmark"  style={styles.stackicon}/>
              </Left>
                <Body     >
                  <Text  onPress={() => this.props.navigation.navigate('Prayers')} style={styles.stacktext}>Prayer</Text>
                </Body>
              </ListItem>
               
              <ListItem icon noBorder  >
                <Left>
                <Icon name="ios-notifications"  style={styles.stackicon}/>
              </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.navigate('Events')} style={styles.stacktext}>News & Events</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Icon name="md-cash"  style={styles.stackicon}/>
                </Left>
                <Body >
                  <Text  onPress={() => this.props.navigation.navigate('Referral')}  style={styles.stacktext}>Donate</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Icon  style={styles.stackicon} name="ios-contact" />
                </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.navigate('Issue')} style={styles.stacktext}>Contact</Text>
                </Body>
              </ListItem>
               <ListItem icon noBorder  >
                <Left>
                <Icon name="ios-help-circle-outline" style={styles.stackicon}/>
                  </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.navigate('About')}  style={styles.stacktext}>About ODM</Text>
                </Body>
              </ListItem>
              <ListItem icon noBorder  >
                <Left>
                <Icon name="ios-information-circle" style={styles.stackicon}/>
                  </Left>
                <Body >
                  <Text onPress={() => this.props.navigation.navigate('Logout')}  style={styles.stacktext}>Logout ODM</Text>
                </Body>
              </ListItem>
          
         </List>
</View>
          </Content>
    );
  }
}

const styles = StyleSheet.create({
    wrap:{
        backgroundColor:'white',
    },
    stackicon:{
        width:30,
        height:25,
        color:'brown',
     },
     stacktext:{
        color:'#c2cbd0',
        fontWeight:'400',
        fontSize:20,

    },
    drawerheader:{
         paddingTop:60,
         paddingBottom:60,
         borderBottomColor:'#c2cbd0',
         borderColor:'transparent',
         borderWidth:1,
    },
    drawerbody:{
     marginTop:30,
     marginLeft:40
   },
   hold: {
    flexDirection: 'row',
    justifyContent:'center',
    alignContent:'center',
    
    },
  inner: {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    alignContent:'flex-start'
    
  },
  checkbox:{
    alignSelf:'center',
  },
  profilename:{
    alignSelf:'flex-start',
  },
  leadtitle:{
    color:'brown',
    fontSize:18,
    fontWeight:'600',
    marginBottom:5,
    alignSelf:'flex-start',
    alignSelf:'center',
},
subtitle:{
    color:'#c2cbd0',
    fontSize:10,
    fontWeight:'700',
    alignSelf:'flex-start',
    
}


});




