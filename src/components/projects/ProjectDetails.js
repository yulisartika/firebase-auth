import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

import { deleteProject } from "../../store/actions/projectActions";

const ProjectDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(id);
  // const state = useSelector((state) => state); // this is to check all the projects created in firestore
  // console.log(state); // to see how the data is, uncomment this and do check

  const projectDetail = useSelector((state) => {
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    // console.log(project);
    return project;
  });
  // console.log(projectDetail);

  const { uid, isLoaded } = useSelector((state) => state.firebase.auth);

  const authorFirstName =
    projectDetail !== null &&
    projectDetail.authorFirstName &&
    `${projectDetail.authorFirstName[0].toUpperCase()}${projectDetail.authorFirstName.slice(
      1
    )}`;

  const authorLastName =
    projectDetail !== null &&
    projectDetail.authorLastName &&
    `${projectDetail.authorLastName[0].toUpperCase()}${projectDetail.authorLastName.slice(
      1
    )}`;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProject(id));
    history.push("/");
  };

  if (isLoaded) {
    if (!uid) return <Redirect to="/signin" />;
    return (
      <>
        {projectDetail ? (
          <div className="container section project-detal">
            <div className="card z-depth-0">
              <button onClick={handleDelete}>X</button>
              <div className="card-content">
                <span className="card-title">{projectDetail.title}</span>
                <p>{projectDetail.content}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>
                  Posted by {authorFirstName} {authorLastName}
                </div>
                <div>{moment(projectDetail.createdAt.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container center">
            <p>Loading project...</p>
          </div>
        )}
      </>
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

export default compose(firestoreConnect([{ collection: "projects" }]))(
  ProjectDetails
);
