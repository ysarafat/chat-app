import { apiSlice } from '../api/apiSlice';

const messagesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: (id) =>
                `/messages?conversations=${id}&_sort=timestamp&_order=desc&_page=1&limit=5`,
        }),
    }),
});
export const { useGetMessagesQuery } = messagesApi;
