import { ONCHNAGE } from "./ActionTypes";


export const OnChange = (name, value) => {
  return {
    type: ONCHNAGE.SET_ONCHNAGE,
    name: name,
    value: value,
  };
};
export const ClearInputValues = () => {
  return {
    type: ONCHNAGE.CLEAR_INPUT_VALUES,
    payload: "",
  };
};

export const setOnChnage = (data) => {
  return {
    type: ONCHNAGE.SET_ON_CHANGE,
    payload: data,
  };
};
