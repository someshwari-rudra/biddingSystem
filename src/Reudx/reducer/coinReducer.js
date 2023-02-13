import { COINS } from "../actions/ActionTypes";

const initailValue = {
  coins: [],
  totalCoins: 0,
  disable: false,
};
export const CoinsReducer = (state = initailValue, { type, payload }) => {
  switch (type) {
    case COINS.GENERATE_COINS:
      return {
        ...state,
        coins: [...state.coins, state.coins + payload],
        totalCoins: payload,
        disable: state.coins.length === 1 ? true : false,
      };
    case COINS.RESET_COINS:
      return {
        ...state,
        coins:[],
        totalCoins: payload,
        disable: false,
      };
    case COINS.REDEEM_COINS:
      return {
        ...state,
        totalCoins: state.totalCoins - payload,
        disable: state.coins.length === 2 ? true : false,
      };

    default:
      return state;
  }
};
