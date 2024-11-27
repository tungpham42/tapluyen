import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const RoutineList = ({ routine, onExerciseClick }) => (
  <div className="routine-list">
    {routine.map((day, idx) => (
      <Card key={idx} className="mb-3">
        <Card.Header>{day.day}</Card.Header>
        <ListGroup>
          {day.exercises.map((exercise, eIdx) => (
            <ListGroup.Item
              key={eIdx}
              onClick={() => onExerciseClick(exercise)}
              style={{ cursor: "pointer" }}
            >
              {exercise.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    ))}
  </div>
);

export default RoutineList;
