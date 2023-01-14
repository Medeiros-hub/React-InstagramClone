
import 'styled-components';
import light from './themes/light';

export type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    }
  }
}