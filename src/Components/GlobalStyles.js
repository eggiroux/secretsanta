import { createGlobalStyle } from "styled-components";

import { COLORS } from "../constants";

export default createGlobalStyle`
    html,
    body,
    div,
    span,
    ul {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    }

  html, body  {
    height: 100%;
  }

  #root {
height: 100%;
  }

    /* GLOBAL STYLES */
    *,
    *:before,
    *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Poppins, sans-serif;
    }
    a {
            text-decoration: none;
    }
    ol, ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, p, a, span
    {
      color: ${COLORS.highlightedText};
    }

`;
