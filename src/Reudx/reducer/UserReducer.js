import { GENERATE_USER } from "../actions/ActionTypes";

const initialState = {
  users: [],
  userNames: [],
  name: "",
  activeClass: "Free",
  activeSlideIndex: 0,
  inputValues: [],
  AllUserValues: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_USER.CREATE_USER:
      return {
        ...state,
        name: action.name,
        userNames: [...state.userNames, action.name],
        users: [action.payload],
      };
    case GENERATE_USER.RESET_INPUT_VALUE:
      return {
        ...state,
        inputValues: [],
        // AllUserValues: [...state.AllUserValues, action.payload],
      };
    case GENERATE_USER.FORM_SUBMIT:
      return {
        ...state,
        inputValues: [...state.inputValues, action.payload],
        AllUserValues: [
          ...state.AllUserValues,
          { [action.name]: [...state.inputValues, action.payload].flat(1) },
        ],
      };
    case GENERATE_USER.SET_ACTIVE_CLASS:
      return {
        ...state,
        activeClass: action.payload,
      };
    case GENERATE_USER.SET_ACTIVE_SLIDE_INDEX:
      return {
        ...state,
        activeSlideIndex: state.activeSlideIndex + 1,
      };
    case GENERATE_USER.RESET_ACTIVE_SLIDE_INDEX:
      return {
        ...state,
        activeSlideIndex: 0,
      };
    case GENERATE_USER.MAX_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GENERATE_USER.RESET_USER_VALUES:
      return {
        ...state,
        userNames: [],
        name: "",
        inputValues: [],
        AllUserValues: [],
      };
    default:
      return state;
  }
};
