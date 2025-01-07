import CerticateCard from "../CertificateCard";
import { getAllCertificates } from "..";

export default async function CertificatesTable() {
  const certificates = await getAllCertificates();
  
  return (
    <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
      {certificates.map((certificate) => (
        <CerticateCard key={certificate.id} {...certificate} />
      ))}
    </div>
  );
}
