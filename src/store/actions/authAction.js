import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../types/authTypes";

export const signIn = (credentials) => (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => {
      dispatch({
        type: LOGIN_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_ERROR,
        err,
      });
    });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: SIGNOUT_SUCCESS });
    });
};

export const signUp = (newUser) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirebase().firestore();

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((resp) => {
      return firestore
        .collection("users")
        .doc(resp.user.uid)
        .set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0],
        });
    })
    .then(() => {
      dispatch({
        type: SIGNUP_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: SIGNUP_ERROR,
        err,
      });
    });
};
