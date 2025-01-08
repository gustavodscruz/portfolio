"use client"
import { ALL_CERTIFICATES_QUERY } from "..";
import { useQuery } from "urql";
import CerticateCard from "../CertificateCard";
import { Certificate } from "@/app/types";

export default function CertificatesTable() {
  const [result] = useQuery({
    query: ALL_CERTIFICATES_QUERY,
  })
  
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
      {result.data?.allCertificates?.map((certificate) => <CerticateCard 
        key={String(certificate.id)}
        id={ String(certificate.id) }  
        illustration={certificate.illustration as Certificate['illustration']}
        title={certificate.title as Certificate['title']}
      />)}
    </div>
  );
}
