import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/index'; // Importa ambos temas
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normaliza los estilos por defecto */}
      <div style={{ padding: '20px' }}>
        <Typography variant="h1">Bienvenido a mi aplicación</Typography>
        <Button variant="contained" color="primary">
          Botón Principal
        </Button>
        <div style={{ marginTop: '20px' }}>
          <Typography variant="body1">
            Modo Claro
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;