import { ONCHNAGE } from "./ActionTypes";


export const OnChange = (name, value) => {
  return {
    type: ONCHNAGE.SET_ONCHNAGE,
    name: name,
    value: value,
  };
};
