"use client"

import { Certificate } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import { BiSolidCertification } from "react-icons/bi";

export type CertificateCard = Omit<Certificate, 'description' | 'linkCertificate'>


export default function CerticateCard({title, illustration, id, issuer} : CertificateCard) {
  const [colorCertification, setColorCertification] = useState<boolean>(false)
  const invertColor = () => setColorCertification(!colorCertification)
  return (
    <>
      <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center clickable" onMouseEnter={invertColor} onMouseLeave={invertColor} >
        <p className="text-center font-semibold text-xl">{title}</p>
        <p className="text-center">Issuer: {issuer}</p>
        <p className="text-center">Id: {id}</p>
        <div className="flex items-start">
          <BiSolidCertification color={colorCertification ? '#cdae62' : '#bdbdc5'} size={60} className="group-hover:scale-150 absolute -ml-5 -mt-5 hover:text-[#9a8249] transition-all duration-300"/> 
          <Image
            alt="Project illustration"
            src={illustration.url}
            height={illustration.height}
            width={illustration.width}
            className="rounded-md object-contain h-48 w-96"
          />
        </div>
      </div>
    </>
  );
}
