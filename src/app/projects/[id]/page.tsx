"use client";
import { CertificateFindByIDQuery } from "@/app/_components/Certificates";
import { ProjectByID } from "@/app/_components/Projects";
import { Project } from "@/app/types";
import Image from "next/image";
import { useQuery } from "urql";




export default function ProjectIndex({
  params,
}: {
  params: { id: string };
}) {

  const [result] = useQuery({
    query: ProjectByID,
    variables: { id : params.id}
  })
  console.log(result)
  const project = result.data?.project as Project

  console.log(project);
  return (
    <div className="flex flex-col items-center">
      {project ? (
        <>
          <h2>{project!.title}</h2>
          <Image
            src={project!.illustration.url}
            alt={project!.title}
            height={project!.illustration.height * 0.20}
            width={project!.illustration.width * 0.30}
            className="object-cover rounded-full my-4"
          />
          <p>{project!.description}</p>
          <a
            href={project!.githubLink}
            target="_blank"
            className="rounded border border-foreground px-3 py-1 clickable hover:bg-foreground hover:text-slate-700"
          >
            Ver certificado
          </a>
          <a className="text-center px-3 py-1 rounded-full border border-foreground"
          href={project!.githubLink}
          >
            Ver certificado no github
          </a>
        </>
      ) : (
        <div>Não foi possível resgatar o certificado!</div>
      )}
    </div>
  );
}
