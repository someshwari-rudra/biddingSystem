import { GENERATE_USER } from "./ActionTypes";

export const fromSubmit = (data) => (dispatch, getState) => {
  const state = getState();
//   const name = state.userReducer.name;
//   const userNames = state.userReducer.userNames;

//   console.log("name", name);
//   console.log("userNames", userNames);
  dispatch({
    type: GENERATE_USER.FORM_SUBMIT,
    payload: data,
  });
};
