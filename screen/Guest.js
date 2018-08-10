import React, { Component } from "react";
 import { TabNavigator } from "react-navigation";
 import {Text} from "react-native";
import {  Button, Icon, Footer, FooterTab } from "native-base";
import Prayers from './SendMoney/Index';
import Events from './Events/Index';
import Media from './Media'; 


 MainScreenNavigator = TabNavigator(
  {
    
    Tabprofile:{screen: Events},
    Prayers:{screen: Prayers},
    Media:{screen: Media},
    
    },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
             <Button
              vertical
              onPress={ ()=> props.navigation.navigate("Tabprofile")}
              active={props.navigationState.index === 0}
             >
              <Icon name="ios-bookmarks-outline" />
              <Text>Events</Text>
            </Button>
            <Button
              vertical
              onPress={ ()=> props.navigation.navigate("Prayers")}
              active={props.navigationState.index === 1}
               >
              <Icon name="briefcase" />
              <Text>Prayers</Text>
            </Button>
           
             <Button
              vertical
              onPress={ ()=> props.navigation.navigate("Media")}
              active={props.navigationState.index === 2}
             >
              <Icon name="ios-images-outline" />
              <Text>Media</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);
 
export default MainScreenNavigator;