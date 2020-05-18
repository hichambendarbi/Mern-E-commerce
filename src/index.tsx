import * as React from "react";
import { render } from "react-dom";

import Main from "./main";
import { createBrowserHistory } from "history";
import { configureStore } from "./configureStore";

const history = createBrowserHistory();

const initialState = window.INITIAL_REDUX_STATE;

export const store = configureStore(history, initialState);

console.log(store.getState());

const rootElement = document.getElementById("root");
render(<Main history={history} store={store} />, rootElement);
