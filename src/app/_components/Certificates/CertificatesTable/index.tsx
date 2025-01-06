import CerticateCard from "../CertificateCard";

export default function CertificatesTable() {
const certificates = Array.from({length: 9}, (_, i) => i);
return (
    <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
        {certificates.map((i)=> <CerticateCard key={i} />)}
    </div>
  )
}
