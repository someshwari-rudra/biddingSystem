import { COINS } from "./ActionTypes"

export const GenerateCoins = (number) => {
     return {
       type: COINS.GENERATE_COINS,
       payload: number,
     };
}
export const RedeemCoins = (data) => {
  return {
    type: COINS.REDEEM_COINS,
    payload:data
  }
}
