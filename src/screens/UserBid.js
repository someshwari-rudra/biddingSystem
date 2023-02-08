import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const UserBid = () => {
  const users = useSelector((state) => state.userReducer.users);
  console.log('users :>> ', users);
  return (
    <div>
      {users.map((component, index) => (
        <Fragment key={index}>{component}</Fragment>
      ))}
    </div>
  );
}

export default UserBid