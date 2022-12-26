import { createGlobalStyle } from 'styled-components';
import colors from './stylesComponents.styles';
import fonts from './fonts.styles';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${fonts.sourceSansPro};
    background: ${colors.backgroundColor};
    width: 100%;
  }

  a:link {
    outline: none;
    border: none;
    color: unset;
  }
`;