import { createContext, useContext, useState } from "react";

const timerContext = createContext();

export const useTimer = () => {
  return useContext(timerContext);
};

export const TimerContextProvider = (props) => {
  const [timer, setTimer] = useState(0);
  const [workTime, setWorkTime] = useState(30);
  const [restTime, setRestTime] = useState(15);
  const [sets, setSets] = useState(5);

  const calculateTotalTime = (workTime, restTime, sets) => {
    
  }

  const value = {
    timer,
    setTimer,
    workTime,
    setWorkTime,
    restTime,
    setRestTime,
    sets,
    setSets,
  };

  return (
    <timerContext.Provider value={value}>
      {props.children}
    </timerContext.Provider>
  );
};
