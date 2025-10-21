import {
  Reducer,
  ReducersMapObject,
  combineReducers,
  Action,
} from "@reduxjs/toolkit";
import {StateSchema, ReducerManager} from "../types/StateSchema";

export function createReducerManager(
  initialReducers: ReducersMapObject,
): ReducerManager {
  const reducers = {...initialReducers};

  let combinedReducer = combineReducers(reducers);

  return {
    getReducerMap: () => ({...reducers}),

    reduce: (state: StateSchema | undefined, action: Action) => {
      return combinedReducer(state, action);
    },

    add: (key: string, reducer: Reducer) => {
      if (reducers[key]) return;

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: string) => {
      if (!reducers[key]) return;

      delete reducers[key];
      combinedReducer = combineReducers(reducers);
    },
  };
}
