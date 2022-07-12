import { TimerContextProvider } from "../src/contexts/timer-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.js";
import RestDuration from "./pages/RestDuration.js";
import SetsAmount from "./pages/SetsAmount.js";
import WorkDuration from "./pages/WorkDuration.js";

const App = () => {
  return (
    <TimerContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="work-duration" element={<WorkDuration />} />
          <Route path="rest-duration" element={<RestDuration />} />
          <Route path="sets-amount" element={<SetsAmount />} />
        </Routes>
      </BrowserRouter>
    </TimerContextProvider>
  );
};

export default App;
