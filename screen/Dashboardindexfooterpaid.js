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
import About from './About';


 MainScreenNavigator = createTabNavigator(
  {
    Dashboard: { screen: Dashboard },
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

 
export default MainScreenNavigator;