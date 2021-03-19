import 'react-native-gesture-handler';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/reducers/provider';

export default App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  )
};