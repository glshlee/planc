import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuComponent from './menu/MenuComponent';

interface Exercise {
  id: number;
  name: string;
  // 다른 필드들도 필요한 경우 추가
}

const ExerciseList: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get<Exercise[]>('/exercises'); // API 응답 데이터 유형을 Exercise[]로 명시
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  const handleExerciseClick = (exercise: Exercise) => {
    console.log('Clicked exercise:', exercise);
    // 클릭된 운동 항목에 대한 추가 로직을 여기에 추가할 수 있습니다.
  };

  const exerciseMenuItems = exercises.map((exercise) => ({
    label: exercise.name,
    onClick: () => handleExerciseClick(exercise),
    // 아이콘 및 컨텐츠 컴포넌트는 MenuComponent에서 처리합니다.
  }));

  return (
    <div>
      <h2>Exercise List</h2>
      <MenuComponent menuItems={exerciseMenuItems} />
    </div>
  );
};

export default ExerciseList;
