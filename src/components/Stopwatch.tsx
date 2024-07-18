import { useState, useEffect } from 'react';
import { Box, Typography, Button, Paper, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.palette.background.default,
}));

const TimeDisplay = styled(Typography)(({ theme }) => ({
  fontFamily: 'monospace',
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  function formatTime(time: number) {
    const milliseconds: number = Math.floor(time % 1000);
    const seconds: number = Math.floor((time / 1000) % 60);
    const minutes: number = Math.floor((time / (1000 * 60)) % 60);
    const formattedMilliseconds: string = String(milliseconds).padStart(3, '0');
    const formattedSeconds: string = String(seconds).padStart(2, '0');
    const formattedMinutes: string = String(minutes).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}.${formattedMilliseconds}`;
  }

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Stopwatch
        </Typography>
        <TimeDisplay variant="h2">{formatTime(time)}</TimeDisplay>
        <ButtonGroup>
          <Button
            variant="contained"
            color={isRunning ? 'error' : 'primary'}
            onClick={startStop}
            startIcon={isRunning ? <StopIcon /> : <PlayArrowIcon />}
            aria-label={isRunning ? 'Stop' : 'Start'}
          >
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button
            variant="outlined"
            onClick={reset}
            startIcon={<RestartAltIcon />}
            aria-label="Reset"
          >
            Reset
          </Button>
        </ButtonGroup>
      </StyledPaper>
    </Container>
  );
};

export default Stopwatch;
