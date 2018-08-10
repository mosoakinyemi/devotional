import React, { Component } from 'react';
import {FlatList,AsyncStorage,ActivityIndicator,  View,Text, StyleSheet,Image,ImageBackground,TouchableHighlight,ScrollView,Alert,Linking,TouchableOpacity,KeyboardAvoidingView  } from 'react-native';
import { Container, Header, Content, Item, Input, Icon, Form, Label } from 'native-base';
   

export default class Profile extends Component {
 constructor(props){
    super(props);
    this.state ={ isLoading: false}
  }

  componentDidMount(){
    AsyncStorage.getItem("email").then((value) => {
        this.setState({"email":value})
      }).done();
 
  }

profils(){
  this.setState({isLoading: true});
  return fetch(`http://ourdailydevotional.herokuapp.com/profile/get/${this.state.email}`)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  
}

  render() {
    const { goBack } = this.props.navigation;  
      if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container}>
                     <ImageBackground style={styles.header}  >
                                <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                   Profile
                                </Text>
                                
                        </ImageBackground>
                        <View style={styles.body}>
                                <ScrollView>
                                     <Text style={styles.textbottom} onPress={() => this.profils()}>
                                        view my profile details. 
                                        </Text>
                                       

                                               <FlatList
                                                data={this.state.dataSource}
                                                renderItem={({item}) =><View>
                                                 <View style={{flexDirection:'row', padding:15,}} >
                                                             <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    FULLNAME
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                              {item.fullname}
                                                                              </Text>
                                                                         </View>
                                                              </View>
                                                </View>
  <View style={{flexDirection:'row', padding:15,}} >
                                                             <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    EMAIL
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                              {item.email}
                                                                              </Text>
                                                                         </View>
                                                              </View>
                                                </View>


                                                 <View style={{flexDirection:'row', padding:15,}} >
                                                             <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    MOBILE
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                                              {item.mobile}
                                                                              </Text>
                                                                         </View>
                                                              </View>
                                                </View>
                                                 <View style={{flexDirection:'row', padding:15,}} >
                                                             <View style={{flex:3, borderBottomColor: '#666',
                                                                borderColor:'transparent',
                                                                borderWidth: 1,}}>
                                                                    <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                                                    PASSWORD
                                                                   </Text>
                                                                         <View style={{flexDirection:'row',paddingBottom:25}} >
                                                                             <Input   
                                returnKeyType= 'go'
                                 secureTextEntry={true}
                                  value={item.password} />
                                                                         </View>
                                                              </View>
                                                </View>



</View>
                                              }
                                                keyExtractor={(item, index) => index}
                                              />
                                                 
              
                                                                           
                            
                                     
                                </ScrollView>
                        </View>      
                    
    </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f5f5f5',
    },
    icon:{
      color:'white',
      },
      navigate:{
      
        marginTop:70,
        marginLeft:30,
     },
     header:{
         flex:2,
         backgroundColor:'brown',

        },
     body:{
        flex:3,
        paddingTop:1,
        marginLeft:35,
        marginRight:35,
        flexDirection:'row',
        alignItems:'flex-start' 
    },
    title:{
        marginLeft:30,
        fontSize:40,
        color:'white',
        marginBottom:15,
        marginTop:15,
    },
    subtitle:{
        marginLeft:30,
        marginTop:5,
        color:'white',
    },
    yippy:{
        width:undefined,
        height:230,
        },
        textbottom:{
            alignSelf:'center',
            color:'#c2cbd0',
            fontWeight:'400',
            fontSize:20,
      
        },
        button: {
            borderWidth: 1,
            paddingTop: 15,
            paddingBottom: 15,
            padding:15,
            borderRadius:5,
            borderColor: 'brown',
            backgroundColor:'brown',
            alignSelf:'flex-start',
            shadowColor: 'brown',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 8,
            marginTop:15,
            alignSelf:'center',
      
         },
         whiteloan:{
            color:'white',
            fontSize:18,
            fontWeight:'600'
          },
    
    
});




