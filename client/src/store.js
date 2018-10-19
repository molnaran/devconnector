import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducert from "./reducers";

const initialState = {};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducert,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
