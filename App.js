import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
 // Version can be specified in package.json

 

 // Get started page
 import Getstarted from './screen/Getstarted';

 import alert from './screen/Error';
 import alertsuccess from './screen/alertsuccess';
 
  // Landingpage page
import Landingpage from './screen/Landingpage';

// signup screen
import Signin from './screen/Signin';

//forget password screen
import Forgetpassword from './screen/forgetpassword/Forget';
 
//Signup screen
import Signup from './screen/Signup/Index';
 import Success from './screen/Signup/Success';
 
//Dashboard Screen
import Dashboardindex from './screen/Dashboardindex';
//Dashboard Screen
import Dashboardindexpaid from './screen/Dashboardindexpaid';
//Guest Screen
import Guest from './screen/Guest';


//Report issues
import Issue from './screen/Reportissue/Issue';

//Referral Screen
import Referral from './screen/Referral/Referral';
 
//Send Money Screen
import Sendmoney from './screen/SendMoney/Index';

import Events from './screen/Events/Index';
import Sidebar from './screen/components/Menu';

 



const RootStack = createStackNavigator(
  {
    Landingpage: {
      screen: Landingpage,
        navigationOptions: {
            header: null, 
         },
    },
    Signin: {
      screen: Signin,
        navigationOptions: {
            header: null, 
         },
    },
    Forgetpassword: {
      screen: Forgetpassword,
        navigationOptions: {
            header: null, 
         },
    },

     
    Signup: {
      screen: Signup,
 
        navigationOptions: {
          title:'Signup',
         },
    },
    

       Success: {
      screen: Success,
        navigationOptions: {
            header: null, 
         },
    },

    

    Dashboardindex: {
      screen: Dashboardindex,
        navigationOptions: {
            header: null, 
             gesturesEnabled: false,
         },
    },
    Dashboardindexpaid: {
      screen: Dashboardindexpaid,
        navigationOptions: {
            header: null, 
             gesturesEnabled: false,
         },
    },
    Issue: {
      screen: Issue,
        navigationOptions: {
            header: null, 
         },
    },
    Referral: {
      screen: Referral,
        navigationOptions: {
            header: null, 
         },
    },
    Sendmoney: {
      screen: Sendmoney,
        navigationOptions: {
            header: null, 
         },
         
    },
    Events: {
      screen: Events,
        navigationOptions: {
            header: null, 
         },
         
    },

        Getstarted: {
      screen: Getstarted,
        navigationOptions: {
            header: null, 
         },
         
    },
    

    alerterror: {
      screen: alert,
        navigationOptions: {
            header: null, 
         },
         
    },
    
    alertsuccess: {
      screen: alertsuccess,
        navigationOptions: {
            header: null, 
         },
         
    }, 
    Guest: {
      screen: Guest,
        navigationOptions: {
            header: null, 
         },
         
    }, 
  },
    
  {
    initialRouteName: 'Getstarted',
  }
);



export default RootStack;