import { COINS } from "./ActionTypes";

export const GenerateCoins = (number) => {
  return {
    type: COINS.GENERATE_COINS,
    payload: number,
  };
};
export const RedeemCoins = (data) => (dispatch, getState) => {
  dispatch({
    type: COINS.REDEEM_COINS,
    payload: data,
  });
};

export const setNextPrice = (price) => {
  return {
    type: COINS.NEXT_PRICE,
    payload: price,
  };
};
