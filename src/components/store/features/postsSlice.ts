import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type TPosts = {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;

// const initialState: TPosts[] | [] = [
//   {
//     id: 0,
//     title: "asdasd",
//     body: "my body",
//     userId: 3,
//     tags: ["comedy", "drama"],
//   },
// ];

// export const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {},
// });

// export const postsSelector = (state: RootState) => state.postsReducer;
// export default postsSlice.reducer;
