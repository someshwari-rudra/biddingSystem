import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import { Row } from "react-bootstrap";
import CopySingleBidBox from "../ReusableComponent/CopySingleBidBox";
import {
  changeActiveClassName,
  setActiveIndex,
} from "../Reudx/actions/GenerateUser";
import {
  currentPrice,
  RedeemCoins,
  setNextPrice,
} from "../Reudx/actions/coins";

SwiperCore.use([Pagination]);
const Bidding = () => {
  const name = useSelector((state) => state.userReducer.name);
  const totalCoins = useSelector((state) => state.coinReducer.totalCoins);

  const price = [0, 500, 1000, 2000, 3000, 4000];
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const { activeSlideIndex } = useSelector((state) => state.userReducer);
  const { nextPrice } = useSelector((state) => state.coinReducer);

  console.log("totalCoins :>> ", totalCoins);
  console.log("nextPrice :>> ", nextPrice);

  const handleFormSubmit = (next_price, current_price) => {
    dispatch(changeActiveClassName("disabled"));
    dispatch(RedeemCoins(current_price));
    dispatch(setNextPrice(next_price));
    if (totalCoins > price) {
      dispatch(changeActiveClassName("Free"));
      dispatch(setActiveIndex(activeSlideIndex + 1));
      console.log("disbaled :>> ", "disbaled");
    }
  };

  useEffect(() => {
    if (totalCoins > nextPrice) {
      dispatch(changeActiveClassName("Free"));
      dispatch(setActiveIndex(activeSlideIndex + 1));
      console.log("disbaled :>> ", "disbaled");
    } else {
      return;
    }
  }, [nextPrice, dispatch, totalCoins]);
  console.log("activeSlideIndex :>> ", activeSlideIndex);
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={(swiper) => dispatch(setActiveIndex(swiper.realIndex))}>
        <SwiperSlide>
          <div className="container">
            <h3>{name}</h3>
            <Row className="g-2">
              {price.map((current_price, index) => {
                const nextPrice = price[index + 1];
                return (
                  <CopySingleBidBox
                    key={current_price}
                    price={current_price}
                    name={name}
                    bidBoxId={index}
                    activeSlideIndex={activeSlideIndex}
                    isActive={index === activeSlideIndex}
                    onSubmited={() =>
                      handleFormSubmit(nextPrice, current_price)
                    }
                    // setActiveSlideIndex={setActiveSlideIndex}
                    isDisabled={index > activeSlideIndex}
                  />
                );
              })}
            </Row>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    // <div className="container">
    //   <h3>{name}</h3>
    //   <div className="row g-2">
    //     {price.map((price, index) => {
    //       return (
    //         <SingleBidBox
    //           key={price}
    //           price={price}
    //           name={name}
    //           bidBoxId={index}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default Bidding;
