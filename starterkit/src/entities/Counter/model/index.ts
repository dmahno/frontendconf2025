export type {CounterSchema} from "./types/CounterSchema";
export {getCounter} from "./selectors/getCounter/getCounter";
export {getCounterValue} from "./selectors/getCounterValue/getCounterValue";
export {
  counterSlice,
  counterActions,
  counterReducer,
} from "./slice/counterSlice";
