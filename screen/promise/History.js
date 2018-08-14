import React, { Component } from 'react';
import { Text,  ActivityIndicator, View, StyleSheet,Image,ImageBackground,TouchableHighlight,TouchableOpacity,ScrollView ,FlatList } from 'react-native';
 import { Input, Item, Picker,Icon } from 'native-base';
   import { Dropdown } from 'react-native-material-dropdown';

  
export default class Bankdetails extends Component {
  
  

constructor(props){
    super(props);
    this.state ={
     isLoading: false,
     msg:'',
     month:'',
     year:'',
      }

  }

   
 _registerin(year) {
      // this.props.navigation.navigate('Dashboardindexpaid');
       this.setState({
                  
                          isLoading: true,
                        
                        }); 
        return fetch('https://ourdailydevotional.herokuapp.com/find/up/'+year)
      .then((response) => response.json())
      .then((responseJson) => {
             if(responseJson == '0'){
                  this.setState({
          
                    msg:'not data found',
                    isLoading: false,
                   });
                 }
                 else{
                       this.setState({
                               dataSource: responseJson,
                               msg:'',
                                isLoading: false,
                               }, function(){

                           });
                  }

       
      })
      .catch((error) =>{
        console.error(error);
      });
      
  
 
  }
 
  render() {
       let month = [{
      value: 'Jan',
    }, {
      value: 'Feb',
    }, {
      value: 'Mar',
    }, {
      value: 'Apr',
    },  {
      value: 'May',
    }, {
      value: 'Jun',
    }, {
      value: 'Jul',
    }, {
      value: 'Aug',
    }, {
      value: 'Sept',
    }, {
      value: 'Oct',
    }, {
      value: 'Nov',
    },{
      value: 'Dec',
    }];

        let year = [{
      value: '2017',
    }, {
      value: '2018',
    }, {
      value: '2019',
    }];
  const { goBack } = this.props.navigation;
  
      if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    
    return (

      <View  style={styles.container}>
         <View style={styles.header}>
                                   <TouchableOpacity style={styles.navigate}
                                onPress={() => goBack()}>
                                    <Icon active name='md-arrow-back' style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.title} > 
                                  Search Unfailling Promise
                                </Text>
                                
                        </View>
            <View style={{ flex:1, flexDirection:'row', backgroundColor:'brown',borderBottomColor: '#666', borderColor:'transparent',borderWidth:1,}}>
                 
                    <View style={{ flex:1,justifyContent:'center',alignContent:'space-between',paddingRight:10}}>
                              <Dropdown
                                  label='Year'
                                  data={year}
                                   baseColor='white'
                                    
                                    onChangeText={(text) => this.setState({year:text})}
                                /> 
                  </View>
                    <View style={{ flex:1,justifyContent:'center',alignContent:'space-between',paddingRight:10}}>
                              <TouchableOpacity 
                                          onPress={() => this._registerin(this.state.year)}
                                         style={{backgroundColor:'white', padding:25,paddingBottom:10,paddingTop:10,borderRadius:2,}}>
                                              <Text style={{color:'brown',alignSelf:'center'}}>
                                                 Search Unfailling
                                              </Text>
                                        </TouchableOpacity>
                  </View>
                   
             </View>
          <View style={{ flex:8, flexDirection:'column',justifyContent:'flex-start',  }}>
           <Text style={{fontSize:18, color:'brown',flexDirection:'row'}}> {this.state.msg} </Text>
                   
                     <View >


                        <ScrollView>

                     <FlatList
                      data={this.state.dataSource}
                      renderItem={({item}) => <View>
                                   
                                   <View style={{borderBottomColor: '#666',
                                        borderColor:'transparent',
                                        borderWidth: 1,}}
                                       >
                                        <Text  
                                        
                                        style={{color:'black',fontWeight:'700',fontSize:20,marginBottom:10,marginTop:10,}}>
                                           {item.title}
                                         </Text>
                                               <View style={{flexDirection:'row',paddingBottom:25}} >
                                                   <Text style={{color:'black',fontWeight:'400',fontSize:16}}
                                                     
>
                                                    {item.subtitle}
                                                    </Text>
                                               </View>
                                    </View>
                      </View>}
                      keyExtractor={(item, index) => index}
                    />
                       
              </ScrollView>



                    </View>
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
  title:{
      marginLeft:30,
      fontSize:20,
      color:'white',
      marginBottom:25,
      marginTop:10,
  },
   navigate:{
    
      marginTop:40,
      marginLeft:30,
   },
   header:{
       flex:3,
       backgroundColor:'brown',

      },

});




