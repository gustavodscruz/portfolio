"use client"

import { Certificate } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidCertification } from "react-icons/bi";

export type CertificateCardType = Omit<Certificate, 'description' | 'linkCertificate' | 'issuer'>


export default function CerticateCard({title, illustration, id} : CertificateCardType) {
  const [colorCertification, setColorCertification] = useState<boolean>(false)
  const invertColor = () => setColorCertification(!colorCertification)
  const navigate = useRouter()

  return (
    <>
      <div className="rounded-lg py-6 px-8 border border-foreground flex flex-col gap-4 items-center justify-center clickable min-h-52 w-full" onMouseEnter={invertColor} onMouseLeave={invertColor} onClick={
        () => {
          navigate.push(`/certificates/${id}`)
        }
      }>
        <div className="min-h-36 flex flex-col items-center justify-center">
          <p className="text-center font-semibold text-xl ">{title}</p>
        </div>
        {/* <p className="text-center">Issuer: {issuer}</p> */}
        <div className="flex items-center">
          <BiSolidCertification color={colorCertification ? '#cdae62' : '#bdbdc5'} size={60} className="group-hover:scale-150 absolute -ml-5 -mt-5 hover:text-[#9a8249] transition-all duration-300"/> 
          <Image
            alt="Project illustration"
            src={illustration.url}
            height={illustration.height}
            width={illustration.width}
            className="rounded-full object-contain bg-white h-14 w-40 "
          />
        </div>
      </div>
    </>
  );
}
