import React, { Component } from 'react';
import { Text,  ActivityIndicator, View, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,ScrollView ,FlatList } from 'react-native';
 
 
 

  
export default class Bankdetails extends Component {
  
  

constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://ourdailydevotional.herokuapp.com/new/declerations')
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
      if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    
    return (
      <View  style={styles.container}>
            <ScrollView>

                     <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => <View style={{flexDirection:'row', padding:15,}} >
                                   <View style={{flex:3, borderBottomColor: '#666',
      borderColor:'transparent',
      borderWidth: 1,}}>
                                        <Text style={{color:'#666',fontWeight:'700',fontSize:20,marginBottom:10,}}>
                                           {item.title}
                                         </Text>
                                               <View style={{flexDirection:'row',paddingBottom:25}} >
                                                   <Text style={{color:'#999',fontWeight:'400',fontSize:16}}>
                                                    {item.subtitle}
                                                    </Text>
                                               </View>
                                    </View>
                      </View>}
                      keyExtractor={(item, index) => index}
                    />
                       
              </ScrollView>

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
        color:'white',
        fontWeight:'900',
      },
      titlesub:{
        fontSize:12,
        color:'white',
        fontWeight:'200',
        letterSpacing:1,
        marginTop:25,
        marginBottom:35,
      },
      white:{
        color:'white',
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
    itemorange:{
      borderColor:'#d66c04',
  },
  whiteitems:{
    color:'white',
 
},


});




