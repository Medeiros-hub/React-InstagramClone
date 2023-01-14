// import React, { createContext, useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import dark from '../styles/themes/dark';
// import light from '../styles/themes/light';


// export const ThemeContext = createContext('');

// interface IThemeContextProvider {
//   children: React.ReactNode;
// }
// export const ThemeContextProvider: React.FC<IThemeContextProvider> = ({
//   children
// }) => {
//   const [ isDarkTheme, setIsDarkTheme ] = useState<unknown>(() => {
//     const theme = localStorage.getItem('theme');
//     if (theme === 'dark') {
//       return 'dark';
//     } else {
//       return 'light';
//     }
//   });

//   return (
//     <ThemeContext.Provider value={String({isDarkTheme, setIsDarkTheme})}>
//       <ThemeProvider theme={isDarkTheme === 'dark' ? dark : light}>
//         {children}
//       </ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => {
//   const [ isDarkTheme, setIsDarkTheme ] = useState<unknown>(ThemeContext);

//   function toggleTheme() {
//     if (isDarkTheme === 'dark') {
//       setIsDarkTheme('light');
//       localStorage.setItem('theme', 'light');
//     }
//     if (isDarkTheme === 'light') {
//       setIsDarkTheme('dark');
//       localStorage.setItem('theme', 'dark');
//     }
//   }
//   return {
//     toggleTheme
//   };
// };

export {};