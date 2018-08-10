import React, { Component } from 'react';
import { Container,Button, Icon,Title, Header, Content, Tab, Tabs,Item,Label,Input } from 'native-base';
import { ActivityIndicator,StyleSheet, TouchableOpacity,Text, View} from 'react-native';

import Tab2 from './Send'; 
import Tab3 from './History';
  

  


export default class Homesend extends Component {



constructor(props) {
      super(props);
        this.state = {
   
       
      }
    }


    
  render() {  
 
   const { goBack } = this.props.navigation;  
     
    return (
      <View style={styles.container}>
                     <View style={styles.header}>
                                   <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                  DEVOTIONAL
                                </Text>
                                
                        </View>
                       <View style={{ flex:1, flexDirection:'row', backgroundColor:'brown',borderTopColor: '#666', borderColor:'transparent',borderWidth:1,}}>
                             <View style={{ flex:1,justifyContent:'center',alignContent:'center',paddingRight:10}}>
                                  <Text style={{fontSize:15,color:'white',alignSelf:'center'}} >Todays message</Text>     
                              </View>
                           <View style={{ flex:1,justifyContent:'center',alignContent:'space-between',paddingRight:10}}>
                              <TouchableOpacity 
                                          onPress={() => this.props.navigation.navigate('Odmmessage')}
                                         style={{backgroundColor:'white', padding:25,paddingBottom:10,paddingTop:10,borderRadius:2,}}>
                                              <Text style={{color:'brown',alignSelf:'center'}}>
                                                 Search for message
                                              </Text>
                                        </TouchableOpacity>
                           </View>
                   
             </View>

             <View style={{flex:8,}} >

             </View>
                   
                        
    
    </View>
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
    
      marginTop:50,
      marginLeft:30,
   },
   header:{
       flex:2,
       backgroundColor:'brown',

      },
   body:{
      flex:3,
  },
  title:{
      marginLeft:30,
      fontSize:40,
      color:'white',
      marginBottom:25,
      marginTop:10,
  },
      white:{
          color:'#c2cbd0',
          fontWeight:'500'
      },
 
});



