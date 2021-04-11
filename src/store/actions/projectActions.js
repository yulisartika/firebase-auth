import {
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  DELETE_PROJECT,
  DELETE_PROJECT_ERROR,
} from "../types/projectTypes";

export const createProject = (project) => {
  // return a function instead of an action in an async event: the use of middleWare: check tutorial 18 if get confused
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    // grabing profile and authorId from the state
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: CREATE_PROJECT,
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_PROJECT_ERROR,
          err,
        });
      });
  };
};

export const deleteProject = (id) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirebase().firestore();

  firestore
    .collection("projects")
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: DELETE_PROJECT,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PROJECT_ERROR,
        err,
      });
    });
};
