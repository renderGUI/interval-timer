import Slider from "../components/Slider";
import classes from "./WorkDuration.module.scss";

const WorkDuration = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Work</h2>
      <p className={classes.subheading}>(The length of each set)</p>
      <div className={classes.subcontainer}>
        <p className={classes.time}>3:00</p>
        <Slider />
      </div>
    </div>
  );
};

export default WorkDuration;
