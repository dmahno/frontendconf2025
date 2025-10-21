import {StateSchema} from "@/app/providers/StoreProvider/types/StateSchema";
import {describe, test, expect} from "vitest";

import {getCounterValue} from "./getCounterValue";

describe("getCounterValue", () => {
  test("check if getCounterValue recieves a number", () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 10},
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
