// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
 
const GlobalStyleSet = createGlobalStyle`
  :root {
    --main-bg-color: #ebebeb;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--main-bg-color);
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root {
    width: 100%;
  }
`;

const theme = createTheme({
    palette: {
      primary: {
        main: '#242424',
      },
      secondary: {
        main: '#054eaf',
      }
    },
    typography: {
        fontFamily: 'Poppins',
      },
});
 
export { GlobalStyleSet, theme };