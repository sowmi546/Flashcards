import React,{Component} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import {Provider} from 'react-redux'
import {purple, white} from './utils/colors';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import thunk from 'redux-thunk';
import reducer from './reducers'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import { Ionicons } from '@expo/vector-icons';
import {handleAllDecksData} from './actions/index.js';
import {connect} from 'react-redux';
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
//const store=createStore(reducer)
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

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        >
             <Tab.Screen name="Decks" component={Decks} />
             <Tab.Screen name="New Deck" component={NewDeck} />
         </Tab.Navigator>
     </NavigationContainer>
  )
}

class App extends Component {


  componentDidMount(){
    this.props.dispatch(handleAllDecksData())
  }
  render(){
    return(

     // <View>
     //    <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
     //
     //  </View>
  //   <Provider store={store}>
       <MyTabs />
    //   </Provider>


    );
  }
}
//export default App;
export default connect()(App);
