import { COINS } from "../actions/ActionTypes";

const initailValue = {
  coins: [],
  totalCoins: 0,
};
export const CoinsReducer = (state = initailValue, { type, payload }) => {
  switch (type) {
    case COINS.GENERATE_COINS:
      return {
        ...state,
        coins: [...state.coins, state.coins + payload],
        totalCoins: payload,
      };
    case COINS.RESET_COINS:
      return {
        ...state,
        totalCoins: payload,
      };
    default:
      return state;
  }
};
