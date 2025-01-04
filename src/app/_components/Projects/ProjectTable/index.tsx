import ProjectCard from "../ProjectCard"

export default function ProjectsTable() {
  const projectsMock = Array.from({length: 20}, (_, i) => i)
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
        {projectsMock.map((i)=> <ProjectCard key={i} /> )}
    </div>
  )
}
