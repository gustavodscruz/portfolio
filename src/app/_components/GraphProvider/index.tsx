"use client";

import React, { ReactNode } from "react";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";
import { datocmsToken } from "@/app/_lib/getToken";

const client = createClient({
  url: "https://graphql.datocms.com/",
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    return {
      headers: { authorization: datocmsToken ? `Bearer ${datocmsToken}` : "" },
    };
  },
});

export const GraphProvider = ({ children }: { children: ReactNode }) => {
  return <Provider value={client}>{children}</Provider>;
};
