import React from "react";
import moment from "moment";

const ProjectSummary = (props) => {
  const { title, authorFirstName, authorLastName, createdAt } = props.project;

  const firstNameUpperCase =
    authorFirstName !== undefined &&
    `${authorFirstName[0].toUpperCase()}${authorFirstName.slice(1)}`;
  const lastNameUpperCase =
    authorLastName !== undefined &&
    `${authorLastName[0].toUpperCase()}${authorLastName.slice(1)}`;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>
          Posted by {firstNameUpperCase} {lastNameUpperCase}
        </p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
