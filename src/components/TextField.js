import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const TextField = (props) => {
  const { name, type, errors, register } = props;
  const inputValue = useSelector((state) => state.userReducer.inputValues);
  const UserInputValue = inputValue.flat(1)
  console.log(UserInputValue)

  return (
    <>
      <input
        name={name}
        type={type}
        className={classNames("form-control shadow-sm m-1", {
          "is-invalid": errors[name],
        })}
        {...register(name, {
          required: true,
          pattern: {
            value: /^[1-9]\d{0,6}$/,
          },
          validate: {
            value: (value) => {
              if (UserInputValue.includes(value)) {
                return false;
              }
            },
          },
        })}
      />
      {errors?.[name]?.type === "required" && (
        <p className="text-danger">Required Field...!</p>
      )}
      {errors?.[name]?.type === "pattern" && (
        <p className="text-danger">
          enter valid number between 1 to 7digit long..!
        </p>
      )}
      {errors[name]?.type === "value" && (
        <p className="text-danger">Value allready taken by you...!</p>
      )}
    </>
  );
};

export default TextField;
