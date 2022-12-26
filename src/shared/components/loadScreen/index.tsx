import igRoundedLogo from '../../../assets/img/igRoundedIcon_.png';
import metaLogo from '../../../assets/img/metaLogo.png';
import { Container } from './loadScreenStyled';


export const LoadScreen = () => {
  return (
    <Container>
      <img 
        src={igRoundedLogo} 
        alt="Logo do Instagram" 
        style={{minWidth: '15%', maxWidth: '20%'}}
      />
      <img 
        id='metaLogo' 
        src={metaLogo} 
        alt="Logo da Meta" 
        style={{minWidth: '5%', maxWidth: '15%'}}
      />
    </Container>
  );
};