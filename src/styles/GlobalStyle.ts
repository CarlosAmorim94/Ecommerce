import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #407AFF;
        --dark: #121212;
        --gray-light: #c4c4c4;
        --gray: #1C1C1C ;
        --white: #FFFFFF;        
    }


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
        overflow: hidden;
    }
    
    html{
        scroll-behavior: smooth;
    }
`