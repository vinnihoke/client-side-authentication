import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <div className="right">
      <ul>
        <li>
          <NavLink to="/">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedOutLinks;
