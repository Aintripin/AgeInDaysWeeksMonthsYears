import MyButton from "./MyButton";
import classes from "../styles/AgeInDayz.module.css";
import { useState } from "react";

const AgeInDayz = () => {
  const [ageInDays, setAgeInDays] = useState(0);

  const yrAge = () => {
    let u_age: number | null = null;

    // Continue prompting until a valid age is entered or cancel is clicked
    while (u_age === null) {
      const input = prompt("Please enter your age (in years):");

      // If user clicks Cancel or presses Esc
      if (input === null) {
        return; // Exit function if user cancels
      }

      // Parse the input as a number
      u_age = +input;

      // Check if the input was a valid number
      if (isNaN(u_age)) {
        alert("Please enter a valid number for age.");
        u_age = null; // Reset u_age to null to prompt again
      }
    }

    const u_age_days = u_age * 365;
    setAgeInDays(u_age_days);
  };

  return (
    <div className={classes.AgeInDayz__main_wrapper}>
      <h1 className={classes.main_h1}>Your Age In Days:</h1>
      <div className={classes.btn_wrapper}>
        <MyButton onClick={yrAge}>Click Me</MyButton>
        <MyButton
          color="primary"
          onClick={() => {
            setAgeInDays(0);
          }}
        >
          Reset
        </MyButton>
      </div>
      <div className={classes.result_wrapper}>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setAgeInDays(0)}
          className={classes.result}
        >
          {ageInDays}
        </span>
      </div>
    </div>
  );
};

export default AgeInDayz;
