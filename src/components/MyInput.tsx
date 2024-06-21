import classes from "../styles/MyInput.module.css";

import React from "react";

interface MyInputProps {
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

const MyInput: React.FC<MyInputProps> = ({
  className,
  onChange,
  type,
  value,
}) => {
  return (
    <div className={classes.main_wrapper}>
      <span className={classes.span_main}>Years:</span>
      <input
        value={value}
        type={type}
        className={className}
        onChange={onChange}
      />
    </div>
  );
};

export default MyInput;
