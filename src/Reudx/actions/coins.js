import { COINS } from "./ActionTypes"

export const GenerateCoins = (number) => {
     return {
       type: COINS.GENERATE_COINS,
       payload: number,
     };
}
