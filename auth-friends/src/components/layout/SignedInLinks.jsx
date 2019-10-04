import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  const store = useSelector(state => state.friendsReducer);
  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/">Add Friend</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating cyan accent-2">
            {store.profile.firstname.charAt(0).toUpperCase()}
            {store.profile.lastname.charAt(0).toUpperCase()}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
