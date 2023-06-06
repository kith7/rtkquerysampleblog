import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "./features/postsSlice";
import { apiSlice } from "./features/postsSlice";
export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;

// In the above code, configureStore() is being used to create and initialize the store with the provided reducer; we’ll add it later. To ensure type safety, AppDispatch and RootState typings are defined for the dispatch() and getState() of our store instance.

// Now, we’ll create the typed versions of the useDispatch and useSelector Hooks: hooks.ts
//https://blog.logrocket.com/using-typescript-redux-toolkit/
