import MaxuserGenerated from "../../components/MaxuserGenerated";
import Bidding from "../../ReusableComponent/Bidding";
import { COINS, GENERATE_USER } from "./ActionTypes";

export const generateUser = (userName) => (dispatch, getState) => {
  const state = getState();
  const inputValues = state.userReducer.inputValues;
  const name = state.userReducer.name;
  dispatch({
    type: COINS.RESET_COINS,
    payload: 0,
  });
  dispatch({
    type: GENERATE_USER.CREATE_USER,
    payload: <Bidding />,
    name: userName,
  });
  dispatch({
    type: GENERATE_USER.RESET_INPUT_VALUE,
    payload: { [name]: inputValues.flat(1) },
  });
  dispatch({
    type: GENERATE_USER.SET_ACTIVE_CLASS,
    payload: "Free",
  });
  dispatch({
    type: COINS.NEXT_PRICE,
    payload: 0
  })
  dispatch({ type: GENERATE_USER.RESET_ACTIVE_SLIDE_INDEX });
};

export const changeActiveClassName = (clasName) => {
  return {
    type: GENERATE_USER.SET_ACTIVE_CLASS,
    payload: clasName,
  };
};

export const setActiveIndex = (index) => (dispatch, getState) => {
  // const state = getState()

  dispatch({
    type: GENERATE_USER.SET_ACTIVE_SLIDE_INDEX,
    payload: index,
  });
};

export const MaxUsergenerated = () => {
  return {
    type: GENERATE_USER.MAX_USER,
    payload: <MaxuserGenerated/>
  }
}