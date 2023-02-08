import { InputValidaiton } from "./regex";

export const Validation = (name, pattern, value) => {
    console.log("name----->", name)
  switch (pattern) {
    case "Input1":
      return InputValidaiton(value);
    default:
      return false;
  }
};
