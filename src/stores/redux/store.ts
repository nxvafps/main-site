import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { selectedIconReducer, layoutReducer, projectReducer } from "./slices";

const store: EnhancedStore = configureStore({
  reducer: {
    selectedIcon: selectedIconReducer,
    layout: layoutReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export { store };
