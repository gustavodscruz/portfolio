import {ProjectsTagsType, Tag } from "@/app/types"
import ProjectCard from "../ProjectCard"
import { useQuery } from "urql"
import { GetProjectsTags } from ".."

export default function ProjectsTable({typeId} : {typeId : Tag['id']}) {
  const [result] = useQuery({
    query : GetProjectsTags,
    variables : {eq : typeId}
  })
  const getProjects = () => {
    if (result.data?.allTags) return result.data!.allTags! as ProjectsTagsType[]
    else return null
  }
  const projects = getProjects()
  return (
    <div>
      {projects != null && projects.length > 0 ? (
        <div className="grid columns-auto gap-5 items-center justify-items-center justify-center m-auto my-4 ">
          {projects.map((referencingProjects) => referencingProjects._allReferencingProjects.map((project) => <ProjectCard key={project.id} project={project} />))}
        </div>
      ) : (
        <div>
          Não foi possível mostrar os projetos!
        </div>
      )}
      
    </div>
  )
}
