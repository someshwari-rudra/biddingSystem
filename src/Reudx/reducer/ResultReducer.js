import { RESULT } from "../actions/ActionTypes";

const initailState = {
  allUsers:[],
  users: {
    name: "",
    inputValue: [],
  },
};

export const ResultReducer = (state = initailState, action) => {
  switch (action.type) {
    case RESULT.ADD_RESULT:
      return {
        ...state,
        allUsers:[...state.allUsers, action.payload],
        users: [...state.users, ...state.users],
      };
    default:
      return state;
  }
};
