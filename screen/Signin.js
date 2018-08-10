import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,AsyncStorage,TouchableOpacity, KeyboardAvoidingView,Alert,ActivityIndicator } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttoncorrectwhite from './components/Buttoncorrectwhite';
import Logo from './components/logo';


export default class Signin extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: '',
      password: '',
      ans:'',
      isLoading: false,
    }
  }
  
  _registerin(name, password) {
      // this.props.navigation.navigate('Dashboardindexpaid');
       this.setState({
                  
                          isLoading: true,
                        
                        }); 
       fetch('https://ourdailydevotional.herokuapp.com/signin/'+name+'/'+password)
        .then((response) => response.json())
        .then((responseJson) => {
  
     
           if(responseJson == '1'){
               
                fetch('https://ourdailydevotional.herokuapp.com/profile/get/'+name+'/ispaid')
                .then((response) => response.json())
                .then((responseJson) => {
                      if(responseJson == '0'){
                        this.setState({
                  
                          isLoading: false,
                        
                        });
        
                            AsyncStorage.setItem("email", name);
                            this.props.navigation.navigate('Dashboardindex', {
                            email: name,
                          });
                      }

                      if(responseJson == '1'){
                        this.setState({
                  
                          isLoading: false,
                        
                        });
        
                        AsyncStorage.setItem("email", name);
                        this.props.navigation.navigate('Dashboardindexpaid', {
                        email: name,
                      });
                  }
                });
             
           }
      
           if(responseJson == '0'){
            this.setState({
    
              ans:'email/password mismatch',
              isLoading: false,
             });
           }
        });
    
  
 
  }

  render() {  
    const { goBack } = this.props.navigation;
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator/>
          <Text style={styles.subtitle}>Authenticating</Text>
        </View>
      )
    }

    return (
     
      <View   style={styles.container}>
    
            <TouchableOpacity style={styles.navigate}
             >
             </TouchableOpacity>

            <View style={styles.contentid}> 
            < KeyboardAvoidingView behavior="position">
            <Logo />
                    <Text style={styles.title}>Our Daily Manna</Text>
                    <Text style={styles.subtitle1}>Our daily manna is a fast and easy way</Text>
                    <Text style={styles.subtitle}>to keep informed about prayers, devotionals, etc..</Text>
                    <Text style={styles.subtitle}> </Text>
               
                    <Text style={styles.subtitle}>{this.state.ans}</Text>
                   
                   
                       
                            <Item floatingLabel   style={styles.inputorange}>
                                  <Label style={styles.white}>Email  </Label>
                                  <Input onChangeText={(text) => this.setState({username:text})}
                                     />
                            </Item>
                            <Item floatingLabel   style={styles.inputorange}>
                                <Label style={styles.white}>Password</Label>
                                <Input   
                                returnKeyType= 'go'
                                 secureTextEntry={true}
                                 onChangeText={(text) => this.setState({password:text})} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Forgetpassword')}>
                                              <Text style={styles.white}>
                                                  Forgot Password?
                                              </Text>  
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                         onPress={() => this._registerin(this.state.username, this.state.password)}>
                                       <Buttoncorrectwhite />
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>

   

                            <View style={{flexDirection:'row',justifyContent:'center',}}>
                                  <View >
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Guest')}
                                         style={{backgroundColor:'brown', padding:25,paddingBottom:10,paddingTop:10,borderRadius:2,}}>
                                              <Text style={{color:'white'}}>
                                                 Guest Login
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                               
                                 
                            </View>
                            </KeyboardAvoidingView>
          </View>
          <View style={styles.footer}>
                  <TouchableOpacity 
                  onPress={() => this.props.navigation.navigate('Signup')} > 
                        <Text  style={styles.titlesub}>
                            New user? create account
                        </Text>
                  </TouchableOpacity>
          </View>
          
 
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: null,
      height: null,
    },
    icon:{
      color:'white',
      },
      navigate:{
        flex:1,
        marginTop:5,
        marginLeft:30,
     },
     contentid:{
      flex:9,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:35,
        color:'white',
        fontWeight:'900',
      },
      title:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:25,
        marginBottom:10,
     },
     subtitle1:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:15,
      

     },
     subtitle:{
        alignSelf:'center',
        color:'brown',
        fontWeight:'600',
        fontSize:15,
        marginBottom:1,

     },
      titlesub:{
        fontSize:12,
        color:'brown',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:5,
        marginBottom:5,
      },
      white:{
        color:'brown',
      },
      hold: {
        flexDirection: 'row',
        marginTop:10,
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
      borderTopColor: 'brown',
      borderColor:'transparent',
      borderWidth: 1,
    },
    itemorange:{
      borderColor:'brown',
  },
  inputorange:{
    color:'brown',
    borderColor:'brown'
  }
});




