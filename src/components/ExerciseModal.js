import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ExerciseModal = ({ exercise, show, onHide }) => {
  const [timer, setTimer] = useState(0); // Bộ đếm thời gian
  const [isRunning, setIsRunning] = useState(false); // Trạng thái chạy/bật

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000); // Cập nhật sau mỗi giây
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, isRunning]);

  useEffect(() => {
    if (!show) {
      resetTimer();
    }
  }, [show]);

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{exercise?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {exercise && (
          <>
            <p>
              <strong>Số hiệp:</strong> {exercise.sets}
            </p>
            <p>
              <strong>Số lần lặp:</strong> {exercise.reps}
            </p>
            <p>
              <strong>Hướng dẫn:</strong> {exercise.instructions}
            </p>

            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <span>
                <strong>Bộ đếm:</strong> {formatTime(timer)}
              </span>
              <div>
                <Button
                  variant={isRunning ? "danger" : "success"}
                  onClick={() => setIsRunning(!isRunning)}
                >
                  {isRunning ? "Dừng" : "Bắt đầu"}
                </Button>{" "}
                <Button variant="secondary" onClick={resetTimer}>
                  Đặt lại
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExerciseModal;