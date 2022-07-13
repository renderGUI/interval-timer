import classes from "./Slider.module.scss";

const Slider = (props) => {
  const mouseUpHandler = () => {
    console.log("Settings changed.");
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
