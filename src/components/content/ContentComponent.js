import React from 'react';

const ContentComponent = ({ exercise }) => {
  return (
    <div>
      <h3>{exercise.name}</h3>
      {/* 기타 운동 정보 표시 */}
    </div>
  );
};

export default ContentComponent;