import React from 'react';
import GlobalStyles from './styles/global';
import { router } from './Routes';
import { RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
function App() {

  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <AppRoute /> */}
      {/* <RouterProvider router={router} /> */}
      <Home />
    </>
  );
}

export default App;