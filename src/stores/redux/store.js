import { configureStore } from "@reduxjs/toolkit";
import { selectedIconReducer } from "./slices";

const store = configureStore({
  reducer: {
    selectedIcon: selectedIconReducer,
  },
});

export default store;
