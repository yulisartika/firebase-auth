import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";

const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const SignUp = () => {
  const [values, setValues] = useState(initialValues);

  const { uid, isLoaded } = useSelector((state) => state.firebase.auth);
  const { authError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values); // try this to make sure all the values are correctly input
    dispatch(signUp(values));
  };

  if (isLoaded) {
    if (uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
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

export default SignUp;
