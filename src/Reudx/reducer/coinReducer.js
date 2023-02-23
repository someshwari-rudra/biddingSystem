import { COINS } from "../actions/ActionTypes";

const initailValue = {
  coins: [],
  totalCoins: 0,
  nextPrice: 0,
  currentPrice: 0,
  disable: false,
};
export const CoinsReducer = (state = initailValue, { type, payload }) => {
  switch (type) {
    case COINS.GENERATE_COINS:
      console.log(payload.disable);
      return {
        ...state,
        coins: [...state.coins, state.coins + payload],
        totalCoins: payload,
        disable: state.coins.length === 1 ? true : false,
      };
    case COINS.RESET_COINS:
      return {
        ...state,
        coins: [],
        totalCoins: payload,
        disable: false,
      };
    case COINS.REDEEM_COINS:
      return {
        ...state,
        totalCoins: state.totalCoins - payload,
        disable: state.coins.length === 2 ? true : false,
      };
    case COINS.NEXT_PRICE:
      return {
        ...state,
        nextPrice: payload,
      };
    case COINS.CURRENT_PRICE:
      return {
        ...state,
        currentPrice:payload
      };
    default:
      return state;
  }
};
