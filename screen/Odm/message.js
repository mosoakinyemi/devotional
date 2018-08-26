import React, { Component } from 'react';
import { Container,Button, Icon,Title, Header, Content, Tab, Tabs,Item,Label,Input } from 'native-base';
import { ActivityIndicator,StyleSheet, TouchableOpacity,Text, View,ScrollView ,FlatList,Alert,WebView} from 'react-native';
 

  


export default class Homesend extends Component {



constructor(props) {
      super(props);
        this.state = {
        
       
      }
    }


     
    
  render() {  
 
       const { goBack } = this.props.navigation;
    const { navigation } = this.props;
    const id = navigation.getParam('id');
     return (
      <View style={styles.container}>
                 
                     
<WebView
        source={{uri: 'http://ourdailydevotional.herokuapp.com/view/message/odm/'+id+'/english'}}
        style={styles.body}
      />
                                

    
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
       flex:2,
       backgroundColor:'brown',

      },
   body:{
      flex:7,
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




