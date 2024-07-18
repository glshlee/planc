import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Container,
  Paper,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ErrorIcon from '@mui/icons-material/Error';

interface Exercise {
  id: number;
  name: string;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setLoading(true);
        const response = await axios.get<Exercise[]>('/api/exercises');
        setExercises(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        setError('Failed to fetch exercises. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchExercises();
  }, []);

  const handleExerciseClick = (exercise: Exercise) => {
    console.log('Clicked exercise:', exercise);
    // 클릭된 운동 항목에 대한 추가 로직을 여기에 추가할 수 있습니다.
  };

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Exercise List
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error" align="center">
            <ErrorIcon />
            {error}
          </Typography>
        ) : (
          <List>
            {exercises.map((exercise) => (
              <ListItem
                button
                key={exercise.id}
                onClick={() => handleExerciseClick(exercise)}
              >
                <ListItemIcon>
                  <FitnessCenterIcon />
                </ListItemIcon>
                <ListItemText primary={exercise.name} />
              </ListItem>
            ))}
          </List>
        )}
      </StyledPaper>
    </Container>
  );
};

export default ExerciseList;
