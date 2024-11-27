import React, { useState } from "react";
import { Container } from "react-bootstrap";
import RoutineList from "./components/RoutineList";
import ExerciseModal from "./components/ExerciseModal";
import routine from "./data/routine";

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    setShowModal(true);
  };

  return (
    <Container>
      <h1 className="my-4">Lịch Tập Luyện Cho Người Mới Bắt Đầu</h1>
      <RoutineList routine={routine} onExerciseClick={handleExerciseClick} />
      <ExerciseModal
        exercise={selectedExercise}
        show={showModal}
        onHide={() => setShowModal(false)}
      />
    </Container>
  );
};

export default App;
