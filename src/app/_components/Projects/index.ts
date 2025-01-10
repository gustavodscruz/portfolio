import { graphql } from "gql.tada";

export const ProjectByID = graphql(`
  query ProjectById($id: ItemId) {
    project(filter: { id: { eq: $id } }) {
      title
      description
      githubLink
      id
      projectDemo
      illustration {
        url
        height
        width
      }
    }
  }
`);

export const GetProjectsTags = graphql(`
  query ProjectTags($eq: ItemId) {
  allTags(filter: {id: {eq: $eq}}) {
    _allReferencingProjects {
      title
      id
      illustration {
        height
        width
        url
      }
    }
  }
  }
`);

export const ALlProjects = graphql(`
  query AllProjects {
    allProjects {
      title
      description
      githubLink
      id
      projectDemo
      illustration {
        url
        height
        width
      }
    }
  }
`);

export const AllProjectsCards = graphql(`
  query AllProjectsCards {
    allProjects {
      id
      title
      illustration {
        url
        height
        width
      }
    }
  }
  `)



