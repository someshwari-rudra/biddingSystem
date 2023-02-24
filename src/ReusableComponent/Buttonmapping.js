import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const ButtonMapping = ({ buttonAttributes }) => {
  return Array.isArray(buttonAttributes) ? (
    buttonAttributes.map(({ value, typeOf, onClick, ...rest }, index) => {
      switch (typeOf) {
        case "generate_user":
          return (
            <Link to={"/"} key={index}>
              <CustomButton onClick={() => onClick()} {...{ ...rest }}>
                {value}
              </CustomButton>
            </Link>
          );
        case "generate_coins":
          return (
            <CustomButton
              onClick={() => onClick()}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "result":
          return (
            <Link to="/result" key={index}>
              <CustomButton onClick={() => onClick()} {...{ ...rest }}>
                {value}
              </CustomButton>
            </Link>
          );
        default:
          return (
            <CustomButton {...{ ...rest }} key={index}>
              {value}
            </CustomButton>
          );
      }
    })
  ) : (
    <CustomButton
      type={buttonAttributes.type}
      onClick={buttonAttributes.onClick}>
      {buttonAttributes.value}
    </CustomButton>
  );
};

export default ButtonMapping;
