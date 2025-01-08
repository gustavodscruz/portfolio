import { graphql } from "gql.tada";

export const AllTags = graphql(`
    query allTags {
        allTags {
            projectType
        }
    }
`) 