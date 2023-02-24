import React, { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GENERATE_USER, RESULT } from "../Reudx/actions/ActionTypes";
import { GenerateCoins } from "../Reudx/actions/coins";
import { generateUser } from "../Reudx/actions/GenerateUser";
import {
  resultAction,
  resultDeclaredAction,
} from "../Reudx/actions/ResultAction";
import ButtonMapping from "../ReusableComponent/ButtonMapping";
import { generateName } from "../utils/RandomNames";
import { getRandomNumber } from "../utils/randomNumber";

const Header = () => {
  const [disableUser, setDisableuser] = useState(false);
  const dispatch = useDispatch();
  const totalUsers = useSelector(
    (state) => state.userReducer.totalUserGenerated
  );
  const coinsGenerated = useSelector((state) => state.coinReducer.totalCoins);
  const AllInputs = useSelector((state) => state.userReducer.AllUserValues);
  const userName = useSelector((state) => state.userReducer.userNames);
  const totalCoins = useSelector((state) => state.coinReducer.coins);
  const nextPrice = useSelector((state) => state.coinReducer.nextPrice);
  const coinsDisable = useSelector((state) => state.coinReducer.disable);
  const { resultDeclared } = useSelector((state) => state.resultReducer);

  console.log("allInputs :>> ", AllInputs);
  console.log("nextPrice :>> ", nextPrice);
  const name = generateName();
  const coins = getRandomNumber();

  const handleClick = () => {
    if (resultDeclared) {
      console.log("called");
      dispatch({ type: GENERATE_USER.RESET_USER_VALUES });
      dispatch({ type: RESULT.CLEAR_RESULT });
    }
    dispatch(generateUser(name));
    dispatch(resultDeclaredAction(false));
  };
  const generateCoins = () => {
    if (totalCoins.length === 2) {
      dispatch({ type: GENERATE_USER.RESET_ACTIVE_SLIDE_INDEX });
    }
    dispatch(GenerateCoins(coins));
  };
  const getResult = () => {
    dispatch(resultAction(AllInputs));
    dispatch(resultDeclaredAction(true));
  };

  useEffect(() => {
    if (totalUsers === 6) {
      setDisableuser(true);
    }
  }, [totalUsers, totalCoins]);

  const ButtonAttribute = [
    {
      value: "Generate User",
      typeOf: "generate_user",
      type: "button",
      disabled: disableUser,
      onClick: () => handleClick(),
    },
    {
      value: "Generate Coins",
      typeOf: "generate_coins",
      disabled:
        userName.length === 0 ? true : nextPrice === 0 ? true : coinsDisable,
      type: "button",
      onClick: () => generateCoins(),
    },
    {
      value: "Result",
      typeOf: "result",
      type: "submit",
      disabled: userName.length < 2 ? true : false,
      onClick: (id) => getResult(),
    },
  ];

  return (
    <Navbar className="bg-dark">
      <Container>
        <NavbarBrand className="text-white">
          <h3>BIDDING</h3>
        </NavbarBrand>
        <NavLink className="text-white">Total coins:{coinsGenerated}</NavLink>
        <div>
          <ButtonMapping buttonAttributes={ButtonAttribute} />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
