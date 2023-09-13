import React from 'react'
import client from '@/lib/apollo-client'
import {  ApolloProvider } from '@apollo/client'

export const Providers = ({ children }) => {
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
