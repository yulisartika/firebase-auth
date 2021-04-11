import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { signIn } from "../../store/actions/authAction";

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [values, setValues] = useState(initialValues);

  const dispatch = useDispatch();
  const { authError } = useSelector((state) => state.auth);
  const { uid, isLoaded } = useSelector((state) => state.firebase.auth);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    dispatch(signIn(values));
  };

  if (isLoaded) {
    if (uid) return <Redirect to="/" />; // if theres uid then redirect to home
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="progress">
          <div className="indeterminate blue"></div>
        </div>
      </div>
    );
  }
};

export default SignIn;
