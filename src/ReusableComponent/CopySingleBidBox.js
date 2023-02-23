import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../components/TextField";
import { inputFields } from "../Data/inputFields";
import { fromSubmit } from "../Reudx/actions/FormSubmit";
import { changeActiveClassName } from "../Reudx/actions/GenerateUser";
import { ClearInputValues, OnChange } from "../Reudx/actions/OnChange";
// import { changeActiveClassName } from "../Reudx/actions/GenerateUser";

const CopySingleBidBox = ({
  price,
  name,
  isActive,
  onSubmited,
  isDisabled,
  activeSlideIndex,
}) => {
  const form2 = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const totalCoins = useSelector((state) => state.coinReducer.totalCoins);
  const activeClass = useSelector((state) => state.userReducer.activeClass);

  const onSubmit = (data, price, name) => {
    const numValues = Object.keys(data).reduce((acc, key) => {
      acc[key] = parseFloat(data[key]);
      return acc;
    }, {});
    console.log("numObj", numValues);
    onSubmited();
    dispatch(fromSubmit(Object.values(numValues), name));
    reset();
  };

  useEffect(() => {
    reset();
  }, [reset]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(OnChange(name, value));
  };

  // console.log("activeClass :>> ", activeClass);
  // console.log("isActive :>> ", isActive);

  return (
    <div
      className={`col-md-4 ${isActive ? activeClass : "disabled"} ${
        isDisabled ? "disabled" : ""
      }`}
    >
      <div className="m-2 p-2 bidbox">
        <div className="row p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h3>{price === 0 ? "Free" : price}</h3>
          </div>
          <form
            action=""
            className="row p-2 form"
            ref={form2}
            onSubmit={handleSubmit((data) => onSubmit(data, price, name))}
          >
            {inputFields.map((input) => {
              return (
                <div className="col-md-6" key={input.id}>
                  <TextField
                    {...input}
                    register={register}
                    errors={errors}
                    handleChange={handleChange}
                  />
                </div>
              );
            })}
            <div className="d-flex justify-content-center align-item-center ">
              <button className="btn btn-primary m-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CopySingleBidBox;
