import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_CMS_URI,
    cache: new InMemoryCache(),
})
