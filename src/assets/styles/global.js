import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    appearance: none;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white[900]};
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  input {
    font-size: 16px;
  }
`;
