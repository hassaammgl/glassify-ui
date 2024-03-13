import * as React from 'react';

const color = "red";
const Button = ({ value, shadowColor = `0 0 10px ${color}, 0 0 10px ${color}, 0 0 10px ${color},
  0 0 10px ${color}`, upperBdrColor = "blue", bottomBdrColor = "blue", leftBdrColor = "blue", rightBdrColor = "blue", textColor = "blue", hoverTextColor = color, textCase = true, fontSize = 16, bgColor = color, hoverBgColor = color, }) => {
    const [hovered, setHovered] = React.useState(false);
    const btnStyles = {
        color: hovered ? hoverTextColor : textColor,
        textTransform: textCase ? "uppercase" : "lowercase",
        fontSize: fontSize + "px",
        boxShadow: hovered ? shadowColor : "none",
        backgroundColor: hovered ? hoverBgColor : bgColor,
    };
    return (React.createElement("button", { className: "glassifybtn", style: btnStyles, onMouseOver: () => setHovered(true), onMouseLeave: () => setHovered(false) },
        React.createElement("span", { style: {
                background: `linear-gradient(90deg, transparent, ${upperBdrColor})`,
            } }),
        React.createElement("span", { style: {
                background: `linear-gradient(90deg, transparent, ${rightBdrColor})`,
            } }),
        React.createElement("span", { style: {
                background: `linear-gradient(90deg, transparent, ${bottomBdrColor})`,
            } }),
        React.createElement("span", { style: {
                background: `linear-gradient(90deg, transparent, ${leftBdrColor})`,
            } }),
        value));
};

export { Button };
