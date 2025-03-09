import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *:not(.fa):not(.fa-refular):not(.fa-solid) {
        font-family: "Noto Sans KR", "NaumGothic", "Malgun Gothic";
    }

    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        padding: 30px 50px;
        margin: 0;
    }
`;

export default GlobalStyles;
