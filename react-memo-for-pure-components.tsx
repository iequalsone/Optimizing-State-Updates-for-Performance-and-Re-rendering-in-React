import React, { FC } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = React.memo(({ label, onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>{label}</button>;
});

export default Button;
