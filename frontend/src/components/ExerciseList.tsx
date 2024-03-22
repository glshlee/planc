import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('/exercises');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercises.map((exercise: any) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;
