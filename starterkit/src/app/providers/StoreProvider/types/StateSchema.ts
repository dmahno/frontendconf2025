import {
  Reducer,
  ReducersMapObject,
  EnhancedStore,
  Action,
} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {CounterSchema} from "@/entities/Counter/model";
import {NavigateOptions, To} from "react-router-dom";

export interface StateSchema {
  counter?: CounterSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject;
  reduce: Reducer<StateSchema>;
  add: (key: string, reducer: Reducer) => void;
  remove: (key: string) => void;
}

export interface ReduxStoreWithManager
  extends EnhancedStore<StateSchema, Action> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
