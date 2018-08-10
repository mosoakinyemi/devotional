import React, { Component } from 'react';
import {  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,ActivityIndicator ,KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';

//Buttonnextwhite
import Buttonnextwhite from '../components/Buttoncorrectwhite';

export default class Index extends Component {
  constructor(props) {
    super(props);
      this.state = {
      username: '',
      password: '',
      mobile: '',
      email: '',
     
      ans:'',
      isLoading: false,
    }
  }
  
  _registerin(name, password, mobile, email) {
    this.setState({
      isLoading: true,
      
     });
       fetch('https://ourdailydevotional.herokuapp.com/signup/'+name+'/'+email+'/'+mobile+'/'+password )
        .then((response) => response.json())
        .then((responseJson) => {
  
     
           if(responseJson == '1'){
            this.setState({
               
              isLoading: false,
              ans:'account created',
             });
             this.props.navigation.navigate('alertsuccess', {
              
            });
           }
      
           if(responseJson == '0'){
            this.setState({
    
              ans:'ERROR! Email is associated with an account',
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
      <ImageBackground  
      style={styles.container}>
      
       
            <View style={styles.contentid}> 
            
                    <Text  style={styles.title}>
                      </Text>
                    <Text  style={styles.titlesub}>
                        Please ensure all details are valid
                    </Text>
                    <Text style={styles.subtitle}>{this.state.ans}</Text>
                    <Content>
                        <Form>
                        <Item floatingLabel   style={styles.inputorange}>
                                <Label style={styles.white}>Fullname</Label>
                                <Input onChangeText={(text) => this.setState({username:text})} />
                            </Item>
                          
                            <Item floatingLabel   style={styles.inputorange}>
                                <Label style={styles.white}>Email</Label>
                                <Input onChangeText={(text) => this.setState({email:text})} />
                            </Item>
                          
                            <Item floatingLabel   style={styles.inputorange}>
                                  <Label style={styles.white}>Phone Number</Label>
                                  <Input onChangeText={(text) => this.setState({mobile:text})}/>
                            </Item>
                            <Item floatingLabel   style={styles.inputorange}>
                                <Label style={styles.white}>Password</Label>
                                <Input  onChangeText={(text) => this.setState({password:text})}  secureTextEntry={true} />
                            </Item>
                            <View style={styles.hold}>
                                  <View style={styles.inner}>
                                        <TouchableOpacity 
                                         onPress={() => this.props.navigation.navigate('Signin')}>
                                              <Text style={styles.white}>
                                                  I have an account
                                              </Text>
                                        </TouchableOpacity>
                                   </View>
                                  <View style={styles.inner1}>
                                        <TouchableOpacity style={styles.checkbox}
                                            onPress={() => this._registerin(this.state.username, this.state.password, this.state.mobile, this.state.email)}>
                                        <Buttonnextwhite/>
                                        </TouchableOpacity>
                                  </View>
                                 
                            </View>
                        </Form>
                  </Content>
                   
          </View>

          


    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      width: null,
      height: null,
    },
    subtitle:{
      alignSelf:'center',
      color:'brown',
      fontWeight:'600',
      fontSize:15,
      marginBottom:10,

   },
    icon:{
      color:'white',
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
        fontSize:35,
        color:'brown',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:12,
        color:'brown',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:25,
        marginBottom:15,
      },
      white:{
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
      borderTopColor: 'white',
      borderColor:'transparent',
      borderWidth: 1,
    },
    inputorange:{
      borderColor:'brown',
  }
});




