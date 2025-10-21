import {describe, test, expect} from "vitest";

import {CounterSchema} from "../types/CounterSchema";
import {counterActions, counterReducer} from "./counterSlice";

describe("counterSlice", () => {
  test("check if counterReducer - counterReducer exclude 1 from number", () => {
    const state: CounterSchema = {value: 10};
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 9,
    });
  });
  test("check if counterReducer - counterReducer add 1 from number", () => {
    const state: CounterSchema = {value: 10};
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 11,
    });
  });
  test("check if counterReducer works with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({
      value: 1,
    });
  });
});
