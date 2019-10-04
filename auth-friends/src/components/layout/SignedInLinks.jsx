import React from "react";

const SignedInLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Add Friend</NavLink>
        </li>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating cyan accent-2">
            VH
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
