import React, { Component } from 'react';
 
import { ActivityIndicator,StyleSheet, TouchableOpacity,Text, View} from 'react-native';
import { Container, Header, Content, Accordion, Icon } from "native-base";
const dataArray = [
  { title: "A little about us", content: "Get updates,audio books and insights into the christian family. Listen to life changing devotional and read inspiring prayer points and declarations.  This app features audio teachings and devotional, as well as sermons by other anointed ministers. It also features inspiring prayers, declarations, upcoming events, media and audio books, gospel materials that will help users engage with the word of God on daily basis. having translation to over 8 languages including yoruba, igbo, hausa, spanish etc"},
  { title: "Contacts", content: "info@ourdailymanna.org,  also Call Us Today! +234-805-6241-771; +234 8100922240 ;+234 8039389802" },
  { title: "Address", content: "Our Daily Manna (Manna Resource Centre) 8-10, Omotayo Banwo Street, Before Mobile Police Barracks, Orioke – Ogudu,Lagos" }
];
  

  


export default class About extends Component {



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
                                   About Us
                                </Text>
                                
                        </View>
                        <View style={styles.body}>
                             <Content padder>
                              <Accordion
                                dataArray={dataArray}
                                headerStyle={{ backgroundColor: "#b7daf8" }}
                                contentStyle={{ backgroundColor: "#ddecf8" }}
                              />
                            </Content>
                              
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
       flex:1,
       backgroundColor:'brown',

      },
   body:{
      flex:3,
  },
  title:{
      marginLeft:30,
      fontSize:40,
      color:'white',
      marginBottom:15,
      marginTop:15,
  },
      white:{
          color:'#c2cbd0',
          fontWeight:'500'
      },
 
});




