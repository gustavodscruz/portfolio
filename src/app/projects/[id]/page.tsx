"use client";
import { ProjectByID } from "@/app/_components/Projects";
import Spinner from "@/app/_components/Spinner";
import { Project } from "@/app/types";
import Image from "next/image";
import { useQuery } from "urql";

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
          <h2>{project!.title}</h2>
          <Image
            src={project!.illustration.url}
            alt={project!.title}
            height={720}
            width={1280}
            className="object-cover rounded-md my-4 w-[1280px] h-[480px] object-center"
          />
          <p>{project!.description}</p>
          {project!.projectDemo ? (
            <a
              href={project!.projectDemo}
              target="_blank"
              className="rounded border border-foreground px-3 py-1 clickable hover:bg-foreground hover:text-slate-700"
            >
              Ver projeto
            </a>
          ) : (
            ""
          )}
          {project!.githubLink ? (
            <a
              className="text-center px-3 py-1 rounded-full border border-foreground"
              href={project!.githubLink}
            >
              Ver certificado no github
            </a>
          ) : (
            ""
          )}
        </>
      ) : (
        <Spinner /> 
      )}
    </div>
  );
}
