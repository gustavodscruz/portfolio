import { Project, Tag } from "@/app/types";
import { graphql } from "gql.tada";
import Tag from "../TagList/Tag";
import { idText } from "typescript";

export const GetProjectsTags = graphql(`
  query ProjectTags {
    allTags {
      id
      projectType
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


type ProjectsTagsType = Tag & {
  _allReferencingProjects : Omit<Project, 'description' | 'githubLink' | 'projectDemo'>[]
} 

export const projectsMockList: Project[] = [
  {
    id: 1,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "Java",
    image: "/project.jpg",
  },
  {
    id: 2,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "React",
    image: "/project.jpg",
  },
  {
    id: 3,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "Typescript",
    image: "/project.jpg",
  },
];
export default function ProjectsFilter() {
  return <div>index</div>;
}
