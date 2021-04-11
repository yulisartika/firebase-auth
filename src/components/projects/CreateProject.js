import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import { createProject } from "../../store/actions/projectActions";

const initialValues = {
  title: "",
  content: "",
};

const CreateProject = () => {
  const [values, setValues] = useState(initialValues);
  const { uid } = useSelector((state) => state.firebase.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(values);
    dispatch(createProject(values));
    history.push("/"); // try using async then?
  };

  if (!uid) return <Redirect to="/signin" />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create New Project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
