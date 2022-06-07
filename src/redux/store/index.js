import { createStore, compose, applyMiddleware } from "redux ";
import BasicReducer from "../reducer/index";

const InitialState = {
  tasks: {},
};

// const composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = createStore(
  BasicReducer,
  InitialState,
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);
export default configureStore;
