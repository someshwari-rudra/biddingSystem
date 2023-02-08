import React, { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GenerateCoins } from "../Reudx/actions/coins";
import { generateUser } from "../Reudx/actions/GenerateUser";
import { generateName } from "../utils/RandomNames";
import { getRandomNumber } from "../utils/randomNumber";

const Header = () => {
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const totalUsers = useSelector(
    (state) => state.userReducer.totalUserGenerated
  );
  const coinsGenerated = useSelector((state) => state.coinReducer.totalCoins);
  // const coinsGenerated = useSelector((state) => state.generateCoinsReducer.totalCoins)

  const name = generateName();
  const coins = getRandomNumber();

  const handleClick = () => {
    dispatch(generateUser(name));
  };
  const generateCoins = () => {
    dispatch(GenerateCoins(coins));
  };

  useEffect(() => {
    if (totalUsers === 6) {
      setDisable(true);
    }
  }, [totalUsers]);

  return (
    <Navbar className="bg-dark">
      <Container>
        <NavbarBrand className="text-white">
          <h3>BIDDING</h3>
        </NavbarBrand>
        <NavLink className="text-white">Total coins:{coinsGenerated}</NavLink>
        <div>
          <button
            className="btn btn-warning mx-2"
            disabled={disable}
            onClick={handleClick}
          >
            Generate User
          </button>
          <button className="btn btn-warning mx-2" onClick={generateCoins}>
            Generate Coins
          </button>
          <button className="btn btn-warning mx-2">Result</button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
