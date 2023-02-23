import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateUser } from "../Reudx/actions/GenerateUser";
import { generateName } from "../utils/RandomNames";

const UserBid = () => {
  // const users = useSelector((state) => state.userReducer.users);
  const { activeClass, users } = useSelector(
    (state) => state.userReducer
  );
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
  return (
    <div>
      {users && users.length ? (
        users.map((component, index) => (
          <Fragment key={index}>{component}</Fragment>
        ))
      ) : (
        <>
          <h1>generate users</h1>
        </>
      )}
    </div>
  );
};

export default UserBid;
