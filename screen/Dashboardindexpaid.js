import React, { Component } from "react";
import Dashboard from "./Dashboardpaid.js";
import Profile from "./Profile";
import SideBar from "./components/Menu.js";
import { createDrawerNavigator } from "react-navigation";
import { createTabNavigator } from "react-navigation";
import {Text} from "react-native"
import { Button, Icon, Footer, FooterTab } from "native-base";
import Prayers from './SendMoney/Index';
import Events from './Events/Index';
import Referral from './Referral/Referral';
import Issue from './Reportissue/Issue';
import Logout from './Signin';
 import { createStackNavigator } from 'react-navigation';
import Odm from './Odm/Index';
import Odmmessage from './Odm/History';
import message from './Odm/message';

import fb from './Faithboosters/Index';
import fbmessage from './Faithboosters/History';
import messagefb from './Faithboosters/message';

import p from './promise/Index';
import pmessage from './promise/History';
import messagep from './promise/message';


const RootStack = createStackNavigator({

     
    home: { screen: Dashboard,
         navigationOptions: {
                header: null, 
             },
          },

    odm: { screen: Odm,
         navigationOptions: {
                header: null, 
             },
          },
 Odmmessage: { screen: Odmmessage,
         navigationOptions: {
                header: null, 
             },
          },

message: { screen: message,
         navigationOptions: {
                header: null, 
             },
          },

 fb: { screen: fb,
         navigationOptions: {
                header: null, 
             },
          },
 fbmessage: { screen: fbmessage,
         navigationOptions: {
                header: null, 
             },
          },

messagefb: { screen: messagefb,
         navigationOptions: {
                header: null, 
             },
          },
p: { screen: p,
         navigationOptions: {
                header: null, 
             },
          },
 pmessage: { screen: pmessage,
         navigationOptions: {
                header: null, 
             },
          },

messagep: { screen: messagep,
         navigationOptions: {
                header: null, 
             },
          },



     
  
     

});


 MainScreenNavigator = createTabNavigator(
  {
    Dashboard: { screen: RootStack },
    Tabprofile:{screen: Profile},
     Prayers:{screen: Prayers},
  
    },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Dashboard")}>
              <Icon name="ios-home" />
              <Text>Home</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Tabprofile")}>
              <Icon name="briefcase" />
              <Text>Profile</Text>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Prayers")}>
              <Icon name="ios-bookmarks-outline" />
              <Text>Prayers</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

const HomeScreenRouter = createDrawerNavigator(
  {
    MainScreenNavigator: { screen: MainScreenNavigator },
     Referral: { screen: Referral},
    Issue: { screen: Issue},
    Profile: { screen: Profile },
    Prayers: { screen: Prayers},
    Events: { screen: Events},
    Dashboard: { screen: MainScreenNavigator},
    Logout: { screen: Logout},
   
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;