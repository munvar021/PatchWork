import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Prevent horizontal scroll */
    font-size: ${({ theme }) => theme.fontSizes.medium};

    @media ${({ theme }) => theme.responsive.tablet} {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }

    @media ${({ theme }) => theme.responsive.mobile} {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;