// this is the homepage that contains the cards for all the decks
import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import {getAllCards} from '../utils/helpers';
export default class Decks extends Component {
  render(){
    const metaInfo = getAllCards();
    return (
  
    <View style={styles.container}>
    <ScrollView >
       {metaInfo && Object.keys(metaInfo).map(id =>(
         //return(
           <View><Text>{metaInfo[id].title}</Text></View>
        // )
       ))}
    </ScrollView>
    </View>
    );


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
