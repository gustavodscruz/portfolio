"use client";


import React, { ReactNode } from "react";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";

interface GraphProviderType {
  children: ReactNode;
}

// function getToken (){
//   const token = process.env.NEXT_DATOCMS_API_TOKEN
//   return token
// }

const client = createClient({
  url: 'https://graphql.datocms.com/',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
      const token = "40d1d689c7bbea6b48c7d294216ba2"
      return {
          headers: { authorization: token ? `Bearer ${token}` : '' },
      };
  },
})

export const GraphProvider: React.FC<GraphProviderType> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};
