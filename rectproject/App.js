import React, {Component} from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import DataList from './Components/DataList';
import { TouchableHighlight } from 'react-native-gesture-handler';

 
class App extends Component {
  
  render() {
    return (
      <View>
        <Header/>
        <TouchableHighlight>
        <DataList/>
        </TouchableHighlight>
      </View>
    );
  }
}
 
export default App;