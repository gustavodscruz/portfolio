"use client";
import { CertificateFindByIDQuery } from "@/app/_components/Certificates";
import Spinner from "@/app/_components/Spinner";
import { Certificate } from "@/app/types";
import Image from "next/image";
import { useQuery } from "urql";

export default function CertificateIndex({
  params,
}: {
  params: { id: string };
}) {
  const [result] = useQuery({
    query: CertificateFindByIDQuery,
    variables: { id: params.id },
  });
  const certificate = result.data?.certificate as Certificate;

  return (
    <div className="flex flex-col items-center">
      {certificate ? (
        <>
          
          <h2 className="text-center">{certificate!.title} - {certificate!.issuer}</h2>
          <Image
            src={certificate!.illustration.url}
            alt={certificate!.title}
            height={720}
            width={1280}
            className="object-cover rounded-md my-4 w-[1280x] h-[480px]"
          />
          <p>{certificate!.description}</p>
          <a
            href={certificate!.linkCertificate}
            target="_blank"
            className="rounded border border-foreground px-3 py-1 clickable hover:bg-foreground hover:text-slate-700"
          >
            Ver certificado
          </a>
          <p className="text-center "></p>
        </>
      ) : (
        <Spinner /> 
      )}
    </div>
  );
}
