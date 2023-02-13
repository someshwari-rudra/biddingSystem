import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../components/TextField";
import { inputFields } from "../Data/inputFields";
import {
  classDisableOverlay,
  classEnable,
  classFree,
} from "../Reudx/actions/classActions";
import { RedeemCoins } from "../Reudx/actions/coins";
import { fromSubmit } from "../Reudx/actions/FormSubmit";

const SingleBidBox = ({ price, name }) => {
  const [enable, setEnable] = useState("enable");
  const [disableOverlay, setdisableOverlay] = useState("disableOverlay");
  const Free = useSelector((state) => state.class_Name.Free);
  const form2 = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data, price, e) => {
    dispatch(fromSubmit(Object.values(data)));
    if (price === 0) {
      dispatch(classFree());
    } else {
      setdisableOverlay("disableOverlay");
      // dispatch(classDisableOverlay("disableOverlay"));
    }
    setEnable("enable");
    reset();
  };
  const totalCoins = useSelector((state) => state.coinReducer.totalCoins);

  // const enable = useSelector((state) => state.class_Name.enable);
  // console.log("enable :>> ", enable);
  // const disableOverlay = useSelector(
  //   (state) => state.class_Name.displayOverlay
  // );
  // console.log("disableOverlay :>> ", disableOverlay);

  const handleRedeem = (price) => {
    dispatch(RedeemCoins(price));

    // dispatch(classEnable("free"));
    // dispatch(classDisableOverlay("free"));
    setEnable("free");
    setdisableOverlay("free");
  };

  useEffect(() => {
    reset();
  }, [name, reset]);

  return (
    <div className="col-md-4">
      <div className="m-2 p-2 bidbox">
        <div className="row p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h3>{price === 0 ? "Free" : price}</h3>
            {price !== 0 && (
              <button
                className="btn redeemBtn"
                onClick={() => handleRedeem(price)}
              >
                redeem
              </button>
            )}
          </div>
          <form
            action=""
            className="row p-2 form"
            ref={form2}
            onSubmit={handleSubmit((data, e) => onSubmit(data, price, e))}
          >
            {inputFields.map((input) => {
              return (
                <div className="col-md-6" key={input.id}>
                  <TextField {...input} register={register} errors={errors} />
                </div>
              );
            })}

            <div
              className={`${
                price === 0
                  ? Free
                  : totalCoins > price
                  ? enable
                  : disableOverlay
              }`}
            ></div>
            <div className="d-flex justify-content-center align-item-center ">
              <button className="btn btn-primary m-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleBidBox;
