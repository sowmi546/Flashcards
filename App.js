import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {Provider} from 'react-redux'
import {purple, white} from './utils/colors';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import { Ionicons } from '@expo/vector-icons';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Opening up App.js to start working on your app! snctest</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

function UdaciStatusBar ({backgroundColor, ...props}){
  return(
    //this did not work. need to check why
  //  <View style={{backgroundColor, height: Constants.statusBarHeight}} >
    <View style={{backgroundColor, height: Constants.statusBarHeight}} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}



const Tab = createBottomTabNavigator();


//const Tab = Platform.OS === 'ios'? createBottomTabNavigator() : createMaterialTopTabNavigator()

// const Tabs = TabNavigator({
//   Decks :{
//     screen: Decks,
//     navigationOptions:{
//       tabBarLabel : 'Decks',
//       tabBarIcon: ({tintColor}) =><Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     },
//   },
//   NewDeck: {
//     screen: NewDeck,
//     navigationOptions: {
//       tabBarLabel: 'Add Deck',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     },
//   },
// }, {
//   navigationOptions: {
//     header: null
//   },
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// })

function MyTabs (){
  return(
    <NavigationContainer>
         <Tab.Navigator
         screenOptions={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routePath ='New Deck';
            if (routePath === 'New Deck') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (routePath === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
             <Tab.Screen name="Decks" component={Decks} />
             <Tab.Screen name="New Deck" component={NewDeck} />
         </Tab.Navigator>
     </NavigationContainer>
  )
}

export default class App extends Component {
  render(){
    return(

     // <View>
     //    <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
     //
     //  </View>
       <MyTabs />


    );
  }
}
