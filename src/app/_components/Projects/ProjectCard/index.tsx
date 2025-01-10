import { ProjectCardType } from "@/app/types"
import Image from "next/image"

export default function ProjectCard({project} : {project : ProjectCardType}) {
  return (
    <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center">
        <p className="text-center font-semibold text-md min-h-24 flex flex-col m-auto justify-center">{project.title}</p>
        <Image alt="Project illustration" src={project.illustration.url} height={project.illustration.height} width={project.illustration.width} className="rounded-md object-cover h-48 w-96"/>
    </div>
  )
}
