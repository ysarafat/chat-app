import { apiSlice } from '../api/apiSlice';

export const conversationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: (email) =>
                `/conversations?participants_like=${email}&_sort=timestamp&_order=desc&_page=1&limit=5`,
        }),
    }),
});

export const { useGetConversationsQuery } = conversationsApi;
