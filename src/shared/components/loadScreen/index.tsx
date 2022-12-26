import igRoundedLogo from '../../../assets/img/igRoundedIcon_.png';
import metaLogo from '../../../assets/img/metaLogo.png';
import { Container } from './loadScreenStyled';


export const LoadScreen = () => {
  return (
    <Container>
      <img 
        src={igRoundedLogo} 
        alt="Logo do Instagram" 
        style={{width: '10vw'}}
      />
      <img 
        id='metaLogo' 
        src={metaLogo} 
        alt="Logo da Meta" 
        style={{width: '7vw'}}
      />
    </Container>
  );
};