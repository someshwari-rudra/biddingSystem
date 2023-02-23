import { GENERATE_USER } from "./ActionTypes";

export const fromSubmit = (data, name) => {
  return {
    type: GENERATE_USER.FORM_SUBMIT,
    payload: data,
    name:name
  };
};
