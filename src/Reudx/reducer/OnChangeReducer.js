import { ONCHNAGE } from "../actions/ActionTypes";

const initialState = {
  firstInput: "",
  secondInput: "",
  thirdInput: "",
  FourthInput: "",
  FifthInput: "",
  sixthInput: "",
};
export const OnChangeReducer = (
  state = initialState,
  { type, name, value }
) => {
  switch (type) {
    case ONCHNAGE.SET_ONCHNAGE:
      return {
        ...state,
        [name]: value,
      };
    default:
      return state;
  }
};
