import GlobalStyles from './assets/styles/global';
import AppRoutes from './Routes';

import { LoadScreen } from './shared/components/loadScreen';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);
  

  return isLoading ? <LoadScreen /> :
  
    (
      <>
        <GlobalStyles />
        <AppRoutes />
      </>
    );
}

export default App;
