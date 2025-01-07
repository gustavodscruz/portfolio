import { executeQuery } from "@datocms/cda-client";
export const performRequest = async (query : string, options? : any) => {
    return await executeQuery(query, {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN ?? '',
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT ?? '',
    })
}