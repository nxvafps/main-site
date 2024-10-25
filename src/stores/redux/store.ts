import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { selectedIconReducer, layoutReducer } from "./slices";

const store: EnhancedStore = configureStore({
  reducer: {
    selectedIcon: selectedIconReducer,
    layout: layoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
