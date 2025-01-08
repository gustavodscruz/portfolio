"use client";
import { CertificateFindByIDQuery } from "@/app/_components/Certificates";
import { Certificate } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import { useQuery } from "urql";




export default function CertificateIndex({
  params,
}: {
  params: { id: string };
}) {

  const [result] = useQuery({
    query: CertificateFindByIDQuery,
    variables: { id : params.id}
  })
  console.log(result)
  const certificate = result.data?.certificate as Certificate

  console.log(certificate);
  return (
    <div className="flex flex-col items-center">
      {certificate ? (
        <>
          <h2>{certificate!.title}</h2>
          <Image
            src={certificate!.illustration.url}
            alt={certificate!.title}
            height={certificate!.illustration.height * 0.20}
            width={certificate!.illustration.width * 0.30}
            className="object-cover rounded-full my-4"
          />
          <p>{certificate!.description}</p>
          <a
            href={certificate!.linkCertificate}
            target="_blank"
            className="rounded border border-foreground px-3 py-1 clickable hover:bg-foreground hover:text-slate-700"
          >
            Ver certificado
          </a>
          <p className="text-center px-3 py-1 rounded-full border border-foreground">
            {certificate!.issuer}
          </p>
        </>
      ) : (
        <div>Não foi possível resgatar o certificado!</div>
      )}
    </div>
  );
}
