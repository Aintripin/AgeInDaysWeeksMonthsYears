// CustomSelect.tsx

import React, { useState } from "react";
import classes from "../styles/CustomSelect.module.css";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  defaultValue = options[0].value,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div className={classes.custom_select}>
      <div
        className={`${classes.selected_option} ${isOpen ? classes.active : ""}`}
        onClick={toggleDropdown}
      >
        {options.find((option) => option.value === selectedOption)?.label}
      </div>
      {isOpen && (
        <ul className={classes.options}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${classes.option} ${
                option.value === selectedOption ? classes.selected : ""
              }`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
