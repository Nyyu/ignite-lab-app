import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_CMS_URI,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CMS_TOKEN}`,
    },
    cache: new InMemoryCache(),
})
