import { configureStore } from "@reduxjs/toolkit";
import { selectedIconReducer, layoutReducer } from "./slices";

const store = configureStore({
  reducer: {
    selectedIcon: selectedIconReducer,
    layout: layoutReducer,
  },
});

export default store;
