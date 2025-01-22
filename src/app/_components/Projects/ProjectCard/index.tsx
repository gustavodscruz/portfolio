import { ProjectCardType } from "@/app/types"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Tags from "../../Tags"

export default function ProjectCard({project, isOne} : {project : ProjectCardType, isOne?: boolean}) {
  const navigate = useRouter()
  return (
    <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center cursor-pointer hover:bg-slate-700 hover:transition-all hover:duration-300" onClick={() => {
      navigate.push(`/projects/${project.id}`)
    }}>
        {/** min-h-24 para voltar o titulo com altura minima */}
        <p className="text-center font-semibold text-md  flex flex-col m-auto justify-center">{project.title}</p>
        <div className="justify-center gap-3 flex">
          <Tags tagList={project.demo} /> 
        </div>
        <Image alt="Project illustration" src={project.illustration.url} height={project.illustration.height} width={project.illustration.width} className={`rounded-md object-cover ${isOne ? '' : 'h-48 w-96'} `}/>
    </div>
  )
}
