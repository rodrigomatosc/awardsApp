import React from 'react';
import './config/Reactotron';
import { StatusBar } from 'react-native';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#43A8B0" />
      <Routes />
    </>
  );
}

export default App;
