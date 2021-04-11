import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  // const state = useSelector((state) => state);
  // console.log(state);
  // if we're not logged in then there will be isEmpty: true and isLoaded: true in the auth

  const state = useSelector((state) => state);
  console.log(state);

  const { uid, isLoaded } = useSelector((state) => state.firebase.auth); // uid === token, isLoaded will be false when it's not loaded yet
  const { initials } = useSelector((state) => state.firebase.profile);
  const links = uid ? (
    <SignedInLinks initialName={initials} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <nav className="nav wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {isLoaded && links}
      </div>
    </nav>
  );
};

export default Navbar;
