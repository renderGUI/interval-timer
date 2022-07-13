import classes from "./Slider.module.scss";

const Slider = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={classes.sliderContainer}>
      <input
        className={classes.slider}
        onChange={changeHandler}
        type="range"
        min="5"
        max="720"
        step="5"
        defaultValue="30"
      ></input>
    </div>
  );
};

export default Slider;
