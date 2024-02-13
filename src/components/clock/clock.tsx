import React, { useState, useEffect } from "react";
import "./clock.styles.css";

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="clock-text">
        <span className="hour">{time.getHours().toString().padStart(2, '0')}</span>
        <span className="colon">:</span>
        <span className="minute">{time.getMinutes().toString().padStart(2, '0')}</span>
        <span className="colon">:</span>
        <span className="second">{time.getSeconds().toString().padStart(2, '0')}</span>
      </h1>
    </div>
  );
};

export default Clock;
