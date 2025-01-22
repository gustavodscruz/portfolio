"use client";
import { ProjectByID } from "@/app/_components/Projects";
import Spinner from "@/app/_components/Spinner";
import { Project } from "@/app/types";
import Image from "next/image";
import { useQuery } from "urql";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { mappingBadgesColors } from "@/app/_components/Tags/colors-badges-mapping";
import FloatingActions from "@/app/_components/FloatingActions";

export default function ProjectIndex({ params }: { params: { id: string } }) {
  const [result] = useQuery({
    query: ProjectByID,
    variables: { id: params.id },
  });
  const project = result.data?.project as Project;

  const skillColor = (skill : string) => {
    return (mappingBadgesColors as Record<string, { color: string; logoColor: string }>)[skill ?? 'DEFAULT']
  }

  return (
    <div className="flex flex-col items-center">
      {project ? (
        <>
          <h1 className="text-6xl uppercase tracking-wider font-secondary">{project!.title}</h1>
          <div className="flex gap-4 justify-center w-full mt-2 mb-4">
            {project.demo.map((skill, index) => {
              const { color, logoColor } = skillColor(skill.projectType.toLowerCase());
              const tag = skill.projectType.toLowerCase(); 
              console.log(tag, color, logoColor)
              return (
                <Markdown key={index}>
                  {`![${skill.projectType}](https://img.shields.io/badge/${tag}-${color}?style=for-the-badge&logo=${tag}&logoColor=${logoColor})`}
                </Markdown>
              )
            })}
          </div>
          <Image
            src={project!.illustration.url}
            alt={project!.title}
            height={720}
            width={1280}
            className="lg:object-cover object-contain rounded-md my-4 lg:w-[1280px] lg:h-[480px] object-center"
          />
          <Markdown remarkPlugins={[remarkGfm]} className="markdown">
            {project!.description}
          </Markdown>
          <FloatingActions githubLink={project.githubLink} projectLink={project.projectDemo} /> 
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
