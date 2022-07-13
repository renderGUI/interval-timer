import Slider from "../components/Slider";
import classes from "./Settings.module.scss";
import { useTimer } from "../contexts/timer-context";

const SetsAmount = () => {
  const { sets, setSets } = useTimer();

  const changeHandler = (e) => {
    setSets(e.target.value);
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Sets</h2>
      <p className={classes.subheading}>(The amount of work intervals)</p>
      <div className={classes.subcontainer}>
        <p className={classes.time}>{sets}</p>
        <Slider
          min={1}
          max={50}
          step={1}
          defaultValue={sets}
          changeHandler={changeHandler}
        />
      </div>
    </div>
  );
};

export default SetsAmount;
