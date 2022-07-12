import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.totalTime}>17:00</h2>

      <div className={classes.subcontainer}>
        <button className={classes.optionsButton}>3:00</button>
        <button className={classes.goButton}>GO</button>
        <button className={classes.optionsButton}>0:30</button>
      </div>

      <div className={classes.subcontainer}>
        <button className={classes.optionsButton}>x5</button>
      </div>
    </div>
  );
};

export default App;
