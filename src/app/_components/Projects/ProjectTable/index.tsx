import { Project } from "@/app/types"
import ProjectCard from "../ProjectCard"

export default function ProjectsTable({projects} : {projects : Project[]}) {
  // const projectsMock = Array.from({length: 9}, (_, i) => i)
  return (
    <div className="grid columns-auto gap-5 items-center justify-items-center justify-center m-auto my-4 ">
        {projects.map((project)=> <ProjectCard key={project.id} project={project} /> )}
    </div>
  )
}
