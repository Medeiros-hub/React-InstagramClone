/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    ig_black_background: 'rgb(0, 0, 0)'
  }
};


interface IThemeProviderProps {
  children: React.ReactNode
}
export const Theme: React.FC<IThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};