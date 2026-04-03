import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { muiTheme } from '@/lib/muiTheme';
import { Navbar, Hero, Features, Stats, HowItWorks, Footer } from '@/components/sections';

/**
 * App Component (Root)
 * Ensambla todas las secciones de la landing
 * Envuelto en Material-UI ThemeProvider para estilos centralizados
 */
function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
        <Navbar />
        
        <Box component="main">
          <Hero />
          <Features />
          <Stats />
          <HowItWorks />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
