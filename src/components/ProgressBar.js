import classes from "./ProgressBar.module.scss";

const ProgressBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div className={classes.fill}></div>
      </div>
      <p className={classes.setText}>SET 1 OF 5</p>
    </div>
  );
};

export default ProgressBar;
