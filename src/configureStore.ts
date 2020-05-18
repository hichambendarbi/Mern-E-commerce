import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from "history";

import { createRootReducer, rootSaga } from "./Store";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";

export const configureStore = (
  history: History,
  initialState: LabCentralState
): Store<LabCentralState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    initialState, // mochkil howa route makaynch fe state dyal application
   composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
