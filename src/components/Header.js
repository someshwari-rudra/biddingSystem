import React, { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GenerateCoins } from "../Reudx/actions/coins";
import { generateUser } from "../Reudx/actions/GenerateUser";
import { resultAction } from "../Reudx/actions/ResultAction";
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
   const totalCoins = useSelector((state) => state.coinReducer.coins);
   const coinsDisable = useSelector((state) => state.coinReducer.disable);

  const name = generateName();
  const coins = getRandomNumber();

  const handleClick = () => {
    dispatch(generateUser(name));
  };
  const generateCoins = () => {
    dispatch(GenerateCoins(coins));
  };
  const getResult = () => {
    dispatch(resultAction(AllInputs));
  }

  useEffect(() => {
    
    if (totalUsers === 6) {
      setDisableuser(true);
    }
    
  }, [totalUsers, totalCoins]);

  return (
    <Navbar className="bg-dark">
      <Container>
        <NavbarBrand className="text-white">
          <h3>BIDDING</h3>
        </NavbarBrand>
        <NavLink className="text-white">Total coins:{coinsGenerated}</NavLink>
        <div>
          <Link to="/">
            <button
              className="btn btn-warning mx-2"
              disabled={disableUser}
              onClick={handleClick}
            >
              Generate User
            </button>
          </Link>
          <button
            className="btn btn-warning mx-2"
            disabled={coinsDisable}
            onClick={generateCoins}
          >
            Generate Coins
          </button>
          <Link to="/result">
            <button className="btn btn-warning mx-2" onClick={getResult}>
              Result
            </button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
