import React, { Component } from 'react';
import { Container,Button, Icon,Title, Header, Content, Tab, Tabs,Item,Label,Input } from 'native-base';
import { ActivityIndicator,StyleSheet, TouchableOpacity,Text, View,ScrollView ,FlatList,Alert} from 'react-native';
 

  


export default class Homesend extends Component {



constructor(props) {
      super(props);
        this.state = {
        
       
      }
    }


    
    componentDidMount(){
    return fetch('http://ourdailydevotional.herokuapp.com/livestream/get/all/')
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
    
    reg(date){
        this.props.navigation.navigate('web', {
                        datenow: date,
                      });


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
                                  AUDIO BOOK
                                </Text>
                                
                        </View>
                       

             <View style={{flex:7,}} >

  <ScrollView>

                     <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) =>  <View style={{ borderBottomColor: '#666',
                                    borderColor:'transparent',
                                    borderWidth: 1,}}>
                                        <Text 
                                          onPress={()=>this.reg(`${item.subtitle}`)}
                                        style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                       {item.title}
                                       </Text>
                                             <View style={{flexDirection:'row',paddingBottom:25}} >
                                                 <Text
                                                 onPress={()=>this.reg(`${item.subtitle}`)}

                                                  style={{color:'#999',fontWeight:'700',fontSize:16}}>
                                                      {item.subtitle}
                                                  </Text>
                                             </View>
                                  </View>}
                      keyExtractor={(item, index) => index}
                    />
                       
              </ScrollView>

                              


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
    
      marginTop:40,
      marginLeft:30,
   },
   header:{
       flex:3,
       backgroundColor:'brown',

      },
   body:{
      flex:3,
  },
  title:{
      marginLeft:30,
      fontSize:20,
      color:'white',
      marginBottom:25,
      marginTop:10,
  },
      white:{
          color:'#c2cbd0',
          fontWeight:'500'
      },
 
});




