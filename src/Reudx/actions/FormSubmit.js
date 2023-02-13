import { GENERATE_USER } from "./ActionTypes";

export const fromSubmit = (data) => {
  return {
    type: GENERATE_USER.FORM_SUBMIT,
    payload: data,
  };
};
