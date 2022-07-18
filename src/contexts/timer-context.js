import { createContext, useContext, useState } from "react";

const timerContext = createContext();

export const useTimer = () => {
  return useContext(timerContext);
};

export const TimerContextProvider = (props) => {
  const [totalTime, setTotalTime] = useState(0);
  const [workTime, setWorkTime] = useState(180);
  const [restTime, setRestTime] = useState(30);
  const [sets, setSets] = useState(5);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSession, setActiveSession] = useState(false);

  const calculateTotalSeconds = (workTime, restTime, sets) => {
    setTotalTime((parseInt(workTime) + parseInt(restTime)) * parseInt(sets));
  };

  const convertToTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    const leadingZero = (num) => {
      return num.toString().padStart(2, "0");
    };

    return `${leadingZero(min)}:${leadingZero(sec)}`;
  };

  const convertToHHMMSS = (seconds) => {
    const d = new Date(null);
    d.setSeconds(seconds);
    return d.toISOString().substr(11, 8);
  };

  const convertedWorkTime = convertToTime(workTime);
  const convertedRestTime = convertToTime(restTime);
  const convertedTotalTime = convertToHHMMSS(totalTime);

  const value = {
    totalTime,
    setTotalTime,
    workTime,
    setWorkTime,
    restTime,
    setRestTime,
    sets,
    setSets,
    calculateTotalSeconds,
    convertToTime,
    convertedWorkTime,
    convertedRestTime,
    convertedTotalTime,
    isPaused,
    setIsPaused,
    activeSession,
    setActiveSession,
  };

  return (
    <timerContext.Provider value={value}>
      {props.children}
    </timerContext.Provider>
  );
};
