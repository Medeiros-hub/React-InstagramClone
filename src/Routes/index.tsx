import { Navigate } from 'react-router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';


interface AppRoutesProps {
  allowSingleExntends?: boolean
}

const AppRoutes: React.FC<AppRoutesProps> = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />


        {/* Prevenir erro da url */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;