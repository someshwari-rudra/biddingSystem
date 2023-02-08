import classNames from "classnames";
import React from "react";

const TextField = (props) => {
  const { name, type, errors, register } = props;

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
    </>
  );
};

export default TextField;
