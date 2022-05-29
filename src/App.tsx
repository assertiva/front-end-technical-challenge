import { theme } from './globalStyles';

// MUI components
import Grid from '@mui/material/Grid';

// Components
import Header from './components/Header/Header';

// MUI Styles and settings
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        
        <Grid container spacing={2}>
          <Grid item md={4}>
            <div>Esquerda</div>
          </Grid>

          <Grid item md={8}>
            <div>Direita</div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
