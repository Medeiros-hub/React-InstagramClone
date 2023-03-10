/// <reference types="react-scripts" />

declare module '*.scss' {
    const css: { [key: string]: string };
    export default css;
}

declare module '*.sass' {
    const css: { [key: string]: string };
    export default css;
}

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';