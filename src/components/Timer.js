import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Timer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div>
      <h4>{seconds}s</h4>
      <Button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Dừng" : "Bắt đầu"}
      </Button>
      <Button variant="danger" onClick={() => setSeconds(initialSeconds)}>
        Đặt lại
      </Button>
    </div>
  );
};

export default Timer;
