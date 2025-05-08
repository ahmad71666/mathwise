import React from 'react';
import Router from './src/components/navigators/Router';
import { MainAppProvider } from './src/context/MainAppContext';

function App(): JSX.Element {
  return (
    <MainAppProvider>
      <Router />
    </MainAppProvider>
  );
}

export default App;
