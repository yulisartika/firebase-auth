import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import rootReducer from "./rootReducer";
import firebase from "../config/fbConfig";

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const config = {
  userProfile: "users", // where profiles are stored in database
  useFirestoreForProfile: true,
};

export const rffProps = {
  firebase,
  config: config,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
