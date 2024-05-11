import { baseApi } from "../../api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonation: builder.query({
      query: () => ({
        url: "/donate",
        method: "GET",
      }),
      providesTags: ["donation"],
    }),

    createDonation: builder.mutation({
      query: (donationInfo) => ({
        url: "/donate",
        method: "POST",
        body: donationInfo,
      }),
      invalidatesTags: ["donation"],
    }),
  }),
});

export const { useCreateDonationMutation, useGetDonationQuery } = donationApi;
