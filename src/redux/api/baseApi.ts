import {
  // BaseQueryApi,
  // BaseQueryFn,
  // DefinitionType,
  // FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://relief-goods-liard.vercel.app/api/auth",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: ["createSupply", "donation", "comments"],
});
