import {render, screen, userEvent} from "@tests/test-utils";
import {describe, it, expect} from "vitest";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import {Counter} from "./Counter";
import {counterReducer} from "../model/slice/counterSlice";

const renderWithStore = (initial = 0) => {
  const store = configureStore({
    reducer: {counter: counterReducer},
    preloadedState: {counter: {value: initial}},
  });

  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

  return store;
};

describe("Counter", () => {
  it("showing an initial value 0", () => {
    renderWithStore(0);
    expect(screen.getByTestId("title-header")).toHaveTextContent("0");
  });

  it("incrementing the value", async () => {
    const store = renderWithStore(0);
    await userEvent.click(screen.getByTestId("increment-btn"));
    expect(store.getState().counter.value).toBe(1);
  });

  it("decrementing the value", async () => {
    const store = renderWithStore(3);
    await userEvent.click(screen.getByTestId("decrement-btn"));
    expect(store.getState().counter.value).toBe(2);
  });
});
