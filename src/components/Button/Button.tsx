import * as React from "react";

import "./button.css";
import { ButtonProps, btnInterface } from "../../interfaces/BtnInterfaces";

const color: string = "red";

export const Button: React.FC<ButtonProps> = ({
  value,
  shadowColor = `0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color},
  0 0 10px ${color}`,
  upperBdrColor = "blue",
  bottomBdrColor = "blue",
  leftBdrColor = "blue",
  rightBdrColor = "blue",
  textColor = "blue",
  hoverTextColor = color,
  textCase = true,
  fontSize = 16,
  bgColor = color,
  hoverBgColor = color,
}) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  const btnStyles: btnInterface = {
    color: hovered ? hoverTextColor : textColor,
    textTransform: textCase ? "uppercase" : "lowercase",
    fontSize: fontSize + "px",
    boxShadow: hovered ? shadowColor : "none",
    backgroundColor: hovered ? hoverBgColor : bgColor,
  };

  return (
    <button
      className={"glassifybtn"}
      style={btnStyles}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          background: `linear-gradient(90deg, transparent, ${upperBdrColor})`,
        }}
      ></span>
      <span
        style={{
          background: `linear-gradient(90deg, transparent, ${rightBdrColor})`,
        }}
      ></span>
      <span
        style={{
          background: `linear-gradient(90deg, transparent, ${bottomBdrColor})`,
        }}
      ></span>
      <span
        style={{
          background: `linear-gradient(90deg, transparent, ${leftBdrColor})`,
        }}
      ></span>
      {value}
    </button>
  );
};
