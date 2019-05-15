import { /* applyMiddleware ,*/ createStore, combineReducers } from "redux";
// import thunkMiddleware from "redux-thunk";
import pdfGenReducer from "../redux/reducers/pdfGenReducer";
import simpleTestReducer from "../redux/reducers/simpleTestReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

export default () => {
  const store = createStore(
    combineReducers({
      pdfGen: pdfGenReducer,
      testReducer: simpleTestReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
  );
  return store;
};
