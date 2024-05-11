import { baseApi } from "../../api/baseApi";

const commentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET",
      }),
      providesTags: ["comments"],
    }),

    createComments: builder.mutation({
      query: (data) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const { useCreateCommentsMutation, useGetCommentsQuery } = commentsApi;
