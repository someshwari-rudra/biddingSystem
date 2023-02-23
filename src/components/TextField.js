import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const TextField = (props) => {
  const { name, type, errors, register, handleChange } = props;
  const inputValue = useSelector((state) => state.userReducer.inputValues);
  const UserInputValue = inputValue.flat(1);

  const onChangeValues = useSelector((state) => state.onChnageReducer);

  const numValues = Object.keys(onChangeValues).reduce((acc, key) => {
    acc[key] = parseFloat(onChangeValues[key]);
    return acc;
  }, {});

  const values = Object.values(onChangeValues);
  // for (let i = 0; i < values.length; i++){
  //   UserInputValue.push(values[i])
  // }
  // console.log('UserInputValue :>> ', UserInputValue);

  // const validateDuplicateValue = (value) => {
  //   // const duplidateValue = Object.keys(onChangeValues).find((key) => {
  //   //   if (values.includes(onChangeValues[key])) {
  //   //     return key;
  //   //   } else {
  //   //     return null;
  //   //   }
  //   // });
  //   // console.log("duplidateValue :>> ", duplidateValue);
  //   if (values.includes(value)) {
  //     return false;
  //   }
  // };
   const validateDuplicateValue = (value) => {
     const valueArr = Object.values(onChangeValues);
     console.lg()
     const isDuplicate = valueArr.some((value, index) => {
       return valueArr.indexOf(value) !== index;
     });
     return !isDuplicate;
   };
  console.log('errors[name] :>> ', errors[name]);
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
              console.log("value", value);
              if (UserInputValue.includes(value)) {
                return false;
              }
            },
            duplicateValue: (value) => validateDuplicateValue(value),
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
      {errors[name]?.type === "duplicateValue" && (
        <p className="text-danger">Value allready taken by you...!</p>
      )}
    </>
  );
};

export default TextField;
