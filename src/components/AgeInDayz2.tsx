import React, { useState } from "react";
import classes from "../styles/AgeInDayz2.module.css";
import MyInput from "./MyInput";
import MyButton from "./MyButton";

const AgeInDayz2 = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("years"); // Default selection

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputText(newValue);
    calculateResult(newValue, selectedOption);
  };

  const calculateResult = (value: string, option: string) => {
    let multiplier = 1;
    if (option === "weeks") {
      multiplier = 52; // Approximation: 52 weeks in a year
    } else if (option === "months") {
      multiplier = 12; // 12 months in a year
    }
    setResult(Number(value) * multiplier);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    calculateResult(inputText, option);
    setShowDropdown(false); // Hide dropdown after selection
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={classes.AgeInDayz2__main_wrapper}>
      <h1 className={classes.main_h1}>
        Your Age In&nbsp;
        <span
          className={classes.dropdown_toggle}
          onClick={toggleDropdown}
          style={{ color: "#8b1c6a", cursor: "pointer" }}
        >
          {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}
        </span>
      </h1>

      {showDropdown && (
        <div className={classes.dropdown_menu}>
          <MyButton onClick={() => handleOptionChange("years")}>Years</MyButton>
          <MyButton onClick={() => handleOptionChange("months")}>
            Months
          </MyButton>
          <MyButton onClick={() => handleOptionChange("weeks")}>Weeks</MyButton>
        </div>
      )}
      <div className={classes.data_wrapper}>
        <form>
          <MyInput
            type="text"
            className={`form-control bg-dark text-white ${classes.input_main}`}
            value={inputText}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className={classes.result_wrapper}>
        <div
          className={classes.result}
          style={{ cursor: "pointer", color: "#ff00b3" }}
          onClick={() => {
            setResult(0);
            setInputText("");
          }}
        >
          {result}
        </div>
      </div>
    </div>
  );
};

export default AgeInDayz2;
