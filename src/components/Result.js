import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const username = useSelector((state) => state.resultReducer.userName);
    const value = useSelector((state) => state.resultReducer.InputValue);
  return (
    <div>
      <h1>Result</h1>
      {username !== "" && <h2>Username: {username}</h2>}
      {value !== "" && <h2>Value: {value}</h2>}
    </div>
  );
}

export default Result