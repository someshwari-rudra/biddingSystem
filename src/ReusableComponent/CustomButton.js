import React from "react";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="btn btn-warning mx-2" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
