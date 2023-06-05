import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
