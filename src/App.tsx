import { theme } from './globalStyles';
import { styled } from '@mui/material/styles';

// MUI components
import Grid from '@mui/material/Grid';

// Components
import Stores from './components/Stores/Stores';
import Map from './components/Map/Map';
import Header from './components/Header/Header';

// MUI Styles and settings
import { ThemeProvider } from '@mui/material/styles';
import { StoresProvider } from './providers/stores';

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

    @media (max-width: 1200px) {
      .Stores-container {
        .MuiContainer-root {
          height: auto;
          max-width: inherit;
        }
      }

      .Map-container {
        padding: 0 30px 0 45px;
        min-height: 500px;
      }
    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <StoresProvider>
          <Header />
          
          <GridStyled container spacing={2}>
            <Grid item lg={4} md={12} sm={12} xs={12} className='Stores-container'>
              <Stores />
            </Grid>

            <Grid item lg={8} md={12} sm={12} xs={12} className='Map-container'>
              <Map />
            </Grid>
          </GridStyled>
        </StoresProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
