import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


// import React from 'react';
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './src/redux/reducers/rootReducer'
//
//
// const store = createStore(rootReducer)
//
// const Root = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )
//
// AppRegistry.registerComponent(appName, () => Root);
