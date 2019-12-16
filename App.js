import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator'

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import placesReducer from './store/places-reducer'

// Database
import { initDB } from './database/db'

initDB()
  .then(() => { console.log("Initialize Database") })
  .catch(err => { console.log("Initialize Failed") });

const rootReducer = combineReducers({
  places: placesReducer
})

export default function App() {
  return (
    <Provider store={createStore(rootReducer, applyMiddleware(ReduxThunk))}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
