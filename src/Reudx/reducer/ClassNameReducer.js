import { CLASS_NAMES } from "../actions/ActionTypes";

const initialState = {
  Free: "free",
  enable: "enable",
  displayOverlay: "disableOverlay",
};
export const class_Name = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLASS_NAMES.FREE:
      return {
        ...state,
        Free: payload,
      };
    case CLASS_NAMES.ENABLE:
      return {
        ...state,
        enable: payload,
      };
    case CLASS_NAMES.DISPLAY_OVERLAY:
      return {
        ...state,
        displayOverlay: payload,
      };
    default:
      return state;
  }
};


