export const InputValidaiton = (value) => {
    console.log("runded input")
    const regex = /d{0,6}$/;
    console.log("regex.test(value)", regex.test(value));
    return regex.test(value);

};
export const isEmpty = (value, isBoolean) =>
  value !== undefined ? value : isBoolean ? false : "";