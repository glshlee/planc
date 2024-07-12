import { Container, Box, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stopwatch from './components/Stopwatch';
import ExerciseList from './components/ExerciseList';

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            운동 트래커
          </Typography>
          <div className="App">
            <Stopwatch />
            <ExerciseList />
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
