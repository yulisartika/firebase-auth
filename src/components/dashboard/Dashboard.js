import React from "react";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";

const Dashboard = () => {
  // const { projects } = useSelector((state) => state.project); // this is from the dummy data
  // const state = useSelector((state) => state); // this is to check all the projects created in firestore
  // console.log(state); // to see how the data is, uncomment this and do check

  const { projects } = useSelector((state) => state.firestore.ordered); // now retrive the data from the ones on firebase
  const { uid } = useSelector((state) => state.firebase.auth);

  // if we want to filter the user only want to see his data, then this logic can be used to the projects prop
  // const projectsFiltered =
  //   projects && projects.filter((item) => item.authorId === uid);
  // replace the props with this one: <ProjectList projects={projectsFiltered} />

  // const projectLength =
  //   projectsFiltered &&
  //   (projectsFiltered.length === 0
  //     ? "0 Project"
  //     : `${projectsFiltered.length} Projects`);

  const projectLength =
    projects &&
    (projects.length === 0 ? "0 Project" : `${projects.length} Projects`);

  if (!uid) return <Redirect to="/signin" />;

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <h4>{projectLength}</h4>
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default compose(
  firestoreConnect([{ collection: "projects", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
