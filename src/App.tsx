import GlobalStyles from './assets/styles/global.styles';
import AppRoutes from './Routes';

import { LoadScreen } from './shared/components/loadScreen';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
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
