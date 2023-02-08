import Bidding from "../../ReusableComponent/Bidding";
import { COINS, GENERATE_USER } from "./ActionTypes";

export const generateUser = (userName) => (dispatch) => {
    
  dispatch({
    type: COINS.RESET_COINS,
    payload: 0,
  });
  dispatch({
    type: GENERATE_USER.CREATE_USER,
    payload: <Bidding />,
    name: userName,
  });
};
