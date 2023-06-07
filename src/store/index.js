import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 10,
  showCounter: true,
};
const initialAuthState = {
  auth: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
