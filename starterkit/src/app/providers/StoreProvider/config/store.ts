import {configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {NavigateOptions, To} from "react-router-dom";
import {counterReducer} from "@/entities/Counter/model";
import {$api} from "@/shared/api";
import {StateSchema, ReduxStoreWithManager} from "../types/StateSchema";
import {createReducerManager} from "./reducerManager";

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
): ReduxStoreWithManager {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer as Reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  }) as ReduxStoreWithManager;

  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
