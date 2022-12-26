import { MenuLateral } from './../../shared/components/sideMenu';

interface HomePageProps {
  allowSingleExntends?: boolean
}

const HomePage: React.FC<HomePageProps> = () => {
  return ( 
    <MenuLateral />
  );
};

export default HomePage;