import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../components/TextField";
import { inputFields } from "../Data/inputFields";
import { fromSubmit } from "../Reudx/actions/FormSubmit";

const SingleBidBox = ({ price, name }) => {
  const form2 = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 9));
    dispatch(fromSubmit(Object.values(data)));
    reset();
  };
  const totalCoins = useSelector((state) => state.coinReducer.totalCoins);
  const AllUserValues = useSelector((state) => state.userReducer.AllUserValues);
  console.log("AllUserValues", AllUserValues);

  useEffect(() => {
    reset();
  }, [name, reset]);

  return (
    <div className="col-md-4">
      <div className="m-2 p-2 bidbox">
        <div className="row p-2">
          <h3>{price === 0 ? "Free" : price}</h3>
          <form
            action=""
            className="row p-2"
            ref={form2}
            onSubmit={handleSubmit(onSubmit)}>
            {inputFields.map((input) => {
              return (
                <div className="col-md-6" key={input.id}>
                  <TextField {...input} register={register} errors={errors} />
                </div>
              );
            })}
            <div
              className={`${totalCoins >= price ? "enable" : "disableOverlay"}`}
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
