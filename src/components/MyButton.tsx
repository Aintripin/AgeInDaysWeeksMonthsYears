import classes from "../styles/MyButton.module.css";

interface Props {
  children: string;
  color?: "dark" | "primary";
  onClick: () => void;
}

const MyButton = ({ children, color = "dark", onClick }: Props) => {
  return (
    <button
      className={`btn btn-${color} btn-lg ${classes.myBtn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MyButton;
