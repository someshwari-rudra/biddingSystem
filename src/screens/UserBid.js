import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateUser } from "../Reudx/actions/GenerateUser";
import Bidding from "../ReusableComponent/Bidding";
import { generateName } from "../utils/RandomNames";

const UserBid = () => {
  const { coins, totalCoins, nextPrice } = useSelector(
    (state) => state.coinReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const name = generateName();
    if (totalCoins < nextPrice && coins.length === 2) {
      dispatch(generateUser(name));
    } else {
      return;
    }
  }, [totalCoins, coins.length, dispatch, nextPrice]);

  const name = useSelector((state) => state.userReducer.name);
  return (
    <div>
      <Bidding name={name} />
    </div>
  );
};

export default UserBid;
