import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
} from "../types/projectTypes";

const initState = {
  projects: [
    { id: "1", title: "help me find him", content: "blah bluh bleh" },
    { id: "2", title: "collect all the stars", content: "blah blah bloh" },
    { id: "3", title: "egg hunt with Carina", content: "blah, bluh, bleh" },
  ],
};

const projectReducer = (state = initState, action) => {
  const { type, project, err } = action;
  switch (type) {
    case CREATE_PROJECT:
      console.log("created project", project);
      // return [...state, project];
      return state;
    case CREATE_PROJECT_ERROR:
      console.log("create project err", err);
      return state;
    case DELETE_PROJECT:
      console.log("delete project", project);
      return state;
    case DELETE_PROJECT_ERROR:
      console.log("delete project error", err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
