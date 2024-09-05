import { useState } from "react";
import { Button } from "react-bootstrap";

function MyButton(props) {
  const {
    btnValue,
    onClick,
    className,
    type,
    bgColor,
    textColor,
    hoverBgColor,
    hoverColor,
    width,
    float,
    padding,
    margin
  } = props;  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Button
      onClick={onClick}
      className={className}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        padding:padding,
        margin:margin,
        width: width,
        float:float,
        backgroundColor: isHovered ? hoverBgColor : bgColor,
        color: isHovered ? hoverColor : textColor,
        border: `2px solid ${isHovered ? hoverBgColor : bgColor}`,
      }}
    >
      {btnValue}
    </Button>
  );
}

export default MyButton;
