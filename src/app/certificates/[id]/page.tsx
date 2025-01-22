"use client";
import { CertificateFindByIDQuery } from "@/app/_components/Certificates";
import Spinner from "@/app/_components/Spinner";
import Tags from "@/app/_components/Tags";
import { Certificate } from "@/app/types";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
          <h2 className="text-center">
            {certificate!.title} - {certificate!.issuer}
          </h2>
          <div className="flex gap-4 justify-center w-full mt-2 mb-4">
            <Tags tagList={certificate.demo} />
          </div>
          <Image
            src={certificate!.illustration.url}
            alt={certificate!.title}
            height={720}
            width={1280}
            className="lg:object-cover rounded-md my-4 lg:w-[1280x] lg:h-[480px] object-contain"
          />
          <Markdown remarkPlugins={[remarkGfm]} className="markdown">
            {certificate!.description}
          </Markdown>
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
