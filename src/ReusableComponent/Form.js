import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TextField from "./components/TextField";
import { onChange } from "./Reudx/actions/FormActions";
import { InputValidaiton, isEmpty } from "./utils/regex";
const data = {
  Input1: {
    id: 1,
    type: "number",
    name: "input1",
    isRequired: true,
    pattern: InputValidaiton,
    errorMessage: "enter Valid Input..!",
  },
  Input2: {
    id: 2,
    type: "number",
    name: "input2",
    isRequired: true,
    pattern: InputValidaiton,
    errorMessage: "enter Valid Input..!",
  },
  Input3: {
    id: 3,
    type: "number",
    name: "input3",
    isRequired: true,
    pattern: InputValidaiton,
    errorMessage: "enter Valid Input..!",
  },
  Input4: {
    id: 4,
    type: "number",
    name: "input4",
    isRequired: true,
    pattern: InputValidaiton,
    errorMessage: "enter Valid Input..!",
  },
};

const Form = () => {
  const { form, formErrors } = useSelector((state) => state.FormReducer);
  const dispatch = useDispatch();
  const handleChange = (e, pattern) => {
    const { value, name } = e.target;
    dispatch(onChange(name, value, pattern));
  };
  return (
    <form action="" className="row p-2">
      {Object.values(data).map(({ ...all }, index) => {
        const name = Object.keys(data)[index];
        const showError = isEmpty(formErrors[name], true);
        const value = isEmpty(form[name], false);
        return (
          <TextField
            key={index}
            {...{ ...all, name, showError, value, handleChange }}
          />
        );
      })}
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default Form;
