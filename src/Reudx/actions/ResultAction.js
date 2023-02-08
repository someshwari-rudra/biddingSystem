import { RESULT } from "./ActionTypes";

export const resultAction = (userName, inputValues) => {
    return {
      type: RESULT.ADD_RESULT,
      name: userName,
      inputValues: inputValues
    };
}