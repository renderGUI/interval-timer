import { createContext, useContext, useState } from "react";

const timerContext = createContext();

export const useTimer = () => {
  return useContext(timerContext);
};

export const TimerContextProvider = (props) => {
  const [timer, setTimer] = useState(0);

  const value = {
    timer,
    setTimer,
  };

  return (
    <timerContext.Provider value={value}>
      {props.children}
    </timerContext.Provider>
  );
};
