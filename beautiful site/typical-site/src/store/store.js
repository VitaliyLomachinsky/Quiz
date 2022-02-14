import { createStore, combineReducers } from "redux";
import test_reducer from "./test_reducer"

let reducers = combineReducers({
  Test_data: test_reducer,
});

let store = createStore(reducers);

export default store;