import React from "react";
import { useSelector } from "react-redux";
import SingleBidBox from "./SingleBidBox";

const Bidding = () => {
  const price = [0,500,1000,2000,3000,4000]
  const name = useSelector((state) => state.userReducer.name);
  console.log("name", name);

  return (
    <div className="container">
      <h3>{name}</h3>
      <div className="row g-2">
        {price.map((price) => {
         return <SingleBidBox key={price} price={price} name={name} />;
        })}
      </div>
    </div>
  );
};

export default Bidding;
