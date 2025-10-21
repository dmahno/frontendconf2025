import {createSlice} from "@reduxjs/toolkit";
import {CounterSchema} from "../types/CounterSchema";

const initialStateProps: CounterSchema = {value: 0};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateProps,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {actions: counterActions} = counterSlice;
export const {reducer: counterReducer} = counterSlice;
