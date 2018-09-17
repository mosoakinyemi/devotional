import React, { Component } from "react";
import Dashboard from "./Dashboard.js";
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
import About from './SendMoney/About';


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
              onPress={() => props.navigation.navigate("Profile")}>
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
   About:{ screen: About},
    
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;