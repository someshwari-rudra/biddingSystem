import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const TextField = (props) => {
  const { name, type, errors, register, handleChange } = props;
  const inputValue = useSelector((state) => state.userReducer.inputValues);
  const UserInputValue = inputValue.flat(1);

  const onChangeValues = useSelector((state) => state.onChnageReducer);

  const numValues = Object.keys(onChangeValues).reduce((acc, key) => {
    acc[key] = parseInt(onChangeValues[key]);
    return acc;
  }, {});

  const values = Object.values(numValues);
  const isUniqueValue = (value, allValues) => {
    const isDuplicate = Object.values(allValues).filter((v) => v === value).length > 1;
    console.log("isDuplicate :>> ", isDuplicate);
    return !isDuplicate;
  };

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
          onChange: (e) => handleChange(e),
          pattern: {
            value: /^[1-9]\d{0,6}$/,
          },
          validate: {
            value: (value) => {
              if (UserInputValue.includes(value)) {
                return false;
              }
            },
            duplicateValue: (value) => {
              return isUniqueValue(parseInt(value), values);
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
      {errors[name]?.type === "value" ||
        (errors[name]?.type === "duplicateValue" && (
          <p className="text-danger">Value allready taken by you...!</p>
        ))}
    </>
  );
};

export default TextField;
