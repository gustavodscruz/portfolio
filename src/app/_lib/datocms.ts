// import { executeQuery } from "@datocms/cda-client";
// import { GraphQLClient } from "graphql-request";


// export const performRequest = async (query : string, options? : any) => {
//     return await executeQuery(query, {
//         ...options,
//         token: process.env.NEXT_DATOCMS_API_TOKEN ?? '',
//         environment: process.env.NEXT_DATOCMS_ENVIRONMENT ?? '',
//     })
// }

// export const request = ({query, variables, preview} : {query : string, variables? : object, preview? : boolean }) => {
//     const endpoint = preview 
//     ? `https://graphql.datocms.com/preview`
//     : `https://graphql.datocms.com/`;
//     const client = new GraphQLClient(endpoint, {
//         headers: {
//             authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
//         },
//     });
//     return client.request(query, variables)
// }    

