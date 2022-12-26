import styled from 'styled-components';
import styleComponents from '../../../assets/styles/stylesComponents';


const size = '250px';

export const Div = styled.div`
  color: white;
  background: ${styleComponents.primaryColor};
  border-right: ${styleComponents.border};
  height: 100vh;
  max-width: ${size};
  min-width: ${size};
  position: fixed;
  
  & > section {
    padding: 40px 20px;
    width: 100%;
    height: 100%;
  
    img {
      max-width: 100px;
    }
  
    div:last-child {
      position: relative;
      bottom: 20px;
    }
  }

  .logo-icon {
    display: none;
  }

  .heart-icon-top {
    display: none;
  }

  input[type="text"] {
    display: none;
  }


  @media (max-width: 1260px) {
    min-width: 10px;

    & > section {
      padding: 0 !important;
      div:nth-child(2) {
        padding: 0 !important;
      }
    }

    .logo-icon {
      display: block;
      width: 100%;
      padding: 7px 10px;
      margin: 3px 0;
    }

    img {
      display: none;
    }

    p {
      display: none;
    }

    button {
      padding-left: 0; 
      padding-right: 0; 
      padding-top: 10px;
      display: block;
    }
  }


  @media (max-width: 730px) {
    border-bottom: ${styleComponents.border};
    max-width: 100%;
    min-width: 100%;
    height: 60px;

    & > section {
      position: relative;
      padding: 0 !important;
      margin: 0 !important;
      flex-direction: row;
    }

    .top-menu {
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;

      div {
        margin-bottom: 0 !important;
      }

      aside {
        display: flex;
        position: absolute;
        right: 0;
        justify-content: center;
        align-items: center;
        gap: 20px;
      }
    }

    img {
      display: block;
    }

    .logo-icon, .search-icon, .more-icon, .heart-icon-bottom {
      display: none;
    }

    .message-icon {
      order: 1;
    }
    
    .perfil-icon {
      order: 2;
    }

    button:hover {
      background-color: unset;
    }

    .heart-icon-top {
      display: block;
    }

    input[type="text"] {
      display: block;
    }
  }
`;

export const Section = styled.section`
min-height: 90%;
display: flex;
flex-direction: column;

@media (max-width: 1260px) { margin: 10px; } 

@media (max-width: 730px) {
    background-color: ${styleComponents.primaryColor};
    padding: 0 !important;
    margin: 0 !important;
    border-top: ${styleComponents.border};
    width: 100vw;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    min-height: 0 !important;
    
    button {
    width: 100vw;
    height: 5%;
    }
  }
`;

export const InputGroup = styled.div`
  display: none;
  @media (max-width: 730px) {
    position: relative;
    display: flex;
    align-items: center;

    & > *:not(input[type="text"]) {
      position: absolute;
      margin: 0 10px;
    }

    & > :first-child {
      left: 0;
    }

    & > :last-child {
      right: 0px;
    }

    .heart-icon-top {
      padding: 0;
      margin-right: 20px; 
    }

    input[type="text"] {
      outline: none;
      border: none;
      background-color: ${styleComponents.backgroundColor};
      color: #fff;
      border-radius: 5px;
      padding: 12px 20px;
      min-width: 230px;

      ::placeholder {
        padding-left: 20px;
      }
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;  
  border: none;
  outline: unset;
  background: none;
  color: #fff;
  padding: 7px 10px;
  margin: 3px 0;
  width: 100%;
  height: 100%;
  transition: all .5s ease-in-out;

  display: flex;
  border-radius: 25px;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: #121212;
  }

  span {
    padding-top: 5px;
  }

  p {
    font-size: 12pt;
    margin: 0 15px;
  }
`;