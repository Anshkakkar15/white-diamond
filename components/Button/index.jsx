import React from "react";

export const Button = ({ children, extra, ...rest }) => {
  return (
    <button className={`web-primary-button ${extra}`} {...rest}>
      {children}
    </button>
  );
};
