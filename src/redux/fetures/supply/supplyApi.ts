import { baseApi } from "../../api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/all-supplies",
        method: "GET",
      }),
      providesTags: ["createSupply"],
    }),

    createSupply: builder.mutation({
      query: (supplyData) => ({
        url: "/all-supplies",
        method: "POST",
        body: supplyData,
      }),
      invalidatesTags: ["createSupply"],
    }),
    updateSupply: builder.mutation({
      query: (supplyData) => ({
        url: `/all-supplies/${supplyData.id}`,
        method: "PUT",
        body: supplyData.updatedData,
      }),
      invalidatesTags: ["createSupply"],
    }),

    deleteSupply: builder.mutation({
      query: (supplyId) => ({
        url: `/all-supplies/${supplyId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["createSupply"],
    }),
  }),
});

export const {
  useCreateSupplyMutation,
  useGetSuppliesQuery,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = supplyApi;
