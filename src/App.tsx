import { theme } from './globalStyles';
import { styled } from '@mui/material/styles';

// MUI components
import Grid from '@mui/material/Grid';

// Components
import Stores from './components/Stores/Stores';
import Header from './components/Header/Header';

// MUI Styles and settings
import { ThemeProvider } from '@mui/material/styles';

const GridStyled = styled(Grid)`
    height: 100vh;
    padding-top: 22px;

    .Stores-container {
      overflow-y: auto;

      /* width */
      ::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #ffffff; 
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    }
    .Map-container {
      padding-top: 88px;
    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        
        <GridStyled container spacing={2}>
          <Grid item md={4} className='Stores-container'>
            <Stores />
          </Grid>

          <Grid item md={8} className='Map-container'>
            <div>Mapa</div>
          </Grid>
        </GridStyled>
      </div>
    </ThemeProvider>
  );
}

export default App;
