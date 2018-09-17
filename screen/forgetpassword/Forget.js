import React, { Component } from 'react';
import {  Alert,View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,ActivityIndicator  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

import Buttoncorrect from '../components/Buttoncorrectwhite';


export default class Forget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      isLoading: false,
    }
  }

  _registerin(mobile) {
      // this.props.navigation.navigate('Dashboardindexpaid');
       this.setState({
                  
                          isLoading: true,
                        
                        }); 
       fetch('https://ourdailydevotional.herokuapp.com/bulksms/'+mobile)
        .then((response) => response.json())
        .then((responseJson) => {
  
     
           if(responseJson == '1'){
             this.setState({isLoading: false,});
             Alert.alert('success!', 'your password has been sent to the your mobile phone.')             
           }
      
           if(responseJson == '0'){
              this.setState({isLoading: false,});
             Alert.alert('Error!', 'No account is associated with this number.')             
         
           }
        });
    
  
 
  }

  

  render() {
    const { goBack } = this.props.navigation; 
        if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20,justifyContent:'center',alignContent:'center'}}>
          <ActivityIndicator/>
         </View>
      )
    } 
    return (
      <View style={styles.container}>
      
            <TouchableOpacity style={styles.navigate}
             onPress={() => goBack()}>
                <Icon active name='md-arrow-back' style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.contentid}> 
                    <Text  style={styles.title}>
                         Forget Password
                    </Text>
                    <Text  style={styles.titlesub}>
                       Enter the Mobile number associated with your account
                    </Text>

                    <Content>
                        <Form>
                            <Item floatingLabel last style={styles.inputorange}>
                                  <Label style={styles.white}>Mobile </Label>
                                  <Input style={styles.inputorange} 
                                  onChangeText={(text) => this.setState({mobile:text})}/>
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity
                                       onPress={() => this.props.navigation.navigate('Signin')}>
                                              <Text style={styles.gray}>
                                                  I remember
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                          onPress={() => this._registerin(this.state.mobile)}>
                                         
                                         <Buttoncorrect/>
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
          </View>
          <View style={styles.footer}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Signup')} > 
                        <Text  style={styles.titlesubgray}>
                           Dont have an account? Sign up
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
      backgroundColor:'#f5f5f5',
      width: null,
      height: null,
    },
    icon:{
      color:'brown',
      },
      navigate:{
        flex:1,
        marginTop:80,
        marginLeft:30,
     },
     contentid:{
      flex:7,
      marginLeft:50,
      marginRight:50,
       },
       title:{
        fontSize:30,
        color:'brown',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:13,
        color:'brown',
        fontWeight:'200',
        letterSpacing:1,
        lineHeight:20,
        marginTop:25,
        marginBottom:15,
      },
      titlesubgray:{
        fontSize:12,
        color:'brown',
        fontWeight:'700',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
        color:'brown',
      },
      gray:{
        color:'brown',
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
      borderTopColor: 'brown',
      borderColor:'transparent',
      borderWidth: 1,
    },
    inputorange:{
        borderColor:'brown',
    }
});




