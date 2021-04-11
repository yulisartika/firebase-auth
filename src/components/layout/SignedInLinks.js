import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = ({ initialName }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  }; // after this gets fired, check the firebase auth in the console and see that the usera auth disappear

  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <span onClick={handleLogout}>Log Out</span>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initialName}
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
