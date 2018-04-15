import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'


class App extends React.Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyA-5vhfqALyzPngLCNyyR-lX1uywt5YhCk',
      authDomain: 'employee-management-aec6f.firebaseapp.com',
      databaseURL: 'https://employee-management-aec6f.firebaseio.com',
      projectId: 'employee-management-aec6f',
      storageBucket: '',
      messagingSenderId: '1014795133455'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;
