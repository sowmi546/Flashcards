// this is the homepage that contains the cards for all the decks
import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Platform,TouchableOpacity } from 'react-native';
import {getAllCards} from '../utils/helpers';
import {handleAllDecksData} from '../actions/index.js';
import {connect} from 'react-redux'

class Decks extends Component {

  componentDidMount(){
    this.props.dispatch(handleAllDecksData())
  }

  render(){
      const {decks} = this.props;

    return (

       <View style={styles.container}>
      <Text>hello</Text>
       {decks && Object.keys(decks).map(id =>(

               <View key={decks[id].id}><Text>{decks[id].title}</Text></View>

           ))}

       </View>

    )

}
}


const styles = StyleSheet.create({
  container:{
    flex :1,
    padding:100,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

//trying to get decks from state
function mapStateToProps({decks}){

  return{
    decks
  };
}


export default connect(mapStateToProps)(Decks)
