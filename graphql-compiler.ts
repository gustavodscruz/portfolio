import { config } from "dotenv";

config();

/** @type {import("typescript").CompilerOptions} */
module.exports = {
    "plugins": [
      {
        "name": "@0no-co/graphqlsp",
        "schema": {
          "url": "https://graphql.datocms.com",
          "headers": {
            "Accept": "application/graphql-response+json",
            "Authorization": `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
          }
        },
        "tadaOutputLocation": "src/graphql-env.d.ts"
      },
      {
        "name": "next"
      }
    ]
};
