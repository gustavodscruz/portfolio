import { Project } from "@/app/types"
import Image from "next/image"

export default function ProjectCard({project} : {project : Project}) {
  return (
    <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center clickable">
        <p className="text-center font-semibold text-xl">{project.name}</p>
        <p className="text-center">Description: {project.desc}</p>
        <p className="text-center">Type: {project.type}</p>
        <Image alt="Project illustration" src={project.image} height={200} width={400} className="rounded-md object-cover h-48 w-96"/>
        {/* <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-slate-700 clickable my-4 ">View Details</button> */}
    </div>
  )
}
