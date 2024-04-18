import React from "react";
import classNames from "classnames";

const Button = ({ color, size, className, outline, disabled,type, ...props }) => {

  

  const buttonClass = classNames({
    btn: true,
    [`btn-${color}`]: !outline,
    [`btn-outline-${color}`]: outline,
    [`btn-${size}`]: size,
    disabled: disabled,
    [`${className}`]: className,
    [`btn-${type}`]:type,
  });
  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
