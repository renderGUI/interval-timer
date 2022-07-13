import { createContext, useContext, useState } from "react";

const timerContext = createContext();

export const useTimer = () => {
  return useContext(timerContext);
};

export const TimerContextProvider = (props) => {
  const [timer, setTimer] = useState(0);
  const [workTime, setWorkTime] = useState(30);

  const value = {
    timer,
    setTimer,
    workTime,
    setWorkTime,
  };

  return (
    <timerContext.Provider value={value}>
      {props.children}
    </timerContext.Provider>
  );
};
