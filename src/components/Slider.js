import classes from "./Slider.module.scss";
import { useNavigate } from "react-router-dom";

const Slider = (props) => {
  const navigate = useNavigate();

  const mouseUpHandler = () => {
    navigate("/");
  };

  return (
    <div className={classes.sliderContainer}>
      <input
        className={classes.slider}
        onChange={props.changeHandler}
        onMouseUp={mouseUpHandler}
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
      ></input>
    </div>
  );
};

export default Slider;
