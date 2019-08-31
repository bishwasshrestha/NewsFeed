import React, {Component} from 'react';
import useState from 'react';
import { Text, View } from 'react-native';
import { getLightEstimationEnabled } from 'expo/build/AR';
import { addOrientationChangeListener } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { FlatList, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import StyleSheet from 'react-native';


const URL = "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-31&sortBy=publishedAt&apiKey=45069d75a87d4d0bba29a7f9b03feca0";


class DataList extends Component {
  constructor (){
    super();
    this.state = {
      data: []
    };  
    
  } 


  fetchNews(){
    var data;
    fetch(URL)
    .then((response) => response.json())
    .then((responseJSON) => {        
      this.setState({data:responseJSON.articles})
    })
    .catch((error) => {
      console.log("Retriving data failed!");
    });       
  }

  componentDidMount(){
   this.fetchNews();     
  }


  renderListItem = ({item}) => (    
  
      <View style = {{
        width:'100%', 
        height:'100px',
        position:'relative', 
        display:'flex',         
        alignItems:'baseline', 
        borderBottomWidth:'1px',
        borderBottomColor:'black',
        padding:'5px'        
      }}>

        <Text style={{height:'20%', top:'0px', overflow:'hidden', fontWeight:'bold'}}>{item.title}</Text>
        <Text style={{height:'70%', padding:'0px', overflow:'hidden', justifyContent:'center'}}>{item.description}</Text>                
        <Text style={{height:'5%',alignSelf:'flex-end', fontSize:'10px',position:'absolute', bottom:'10px'}}>{item.publishedAt}</Text>
      </View>    
      
    
  )

  render() {  
    console.log(this.state.author + " in render");
    return (
      <FlatList 
        data={this.state.data}
        renderItem ={this.renderListItem}></FlatList>
    )
  };
}
   
  export default DataList;