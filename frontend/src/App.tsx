import React from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import ExerciseList from './components/ExerciseList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Stopwatch />
      <ExerciseList />
    </div>
  );
}

export default App;
