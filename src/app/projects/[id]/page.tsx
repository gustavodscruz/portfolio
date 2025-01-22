"use client";
import { ProjectByID } from "@/app/_components/Projects";
import Spinner from "@/app/_components/Spinner";
import { Project } from "@/app/types";
import Image from "next/image";
import { useQuery } from "urql";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import FloatingActions from "@/app/_components/FloatingActions";
import Tags from "@/app/_components/Tags";

export default function ProjectIndex({ params }: { params: { id: string } }) {
  const [result] = useQuery({
    query: ProjectByID,
    variables: { id: params.id },
  });
  const project = result.data?.project as Project;


  return (
    <div className="flex flex-col items-center">
      {project ? (
        <>
          <h1 className="text-6xl uppercase tracking-wider font-secondary">{project!.title}</h1>
          <div className="flex gap-4 justify-center w-full mt-2 mb-4">
            <Tags tagList={project.demo} /> 
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
