"use client"

import Image from "next/image";
import { useState } from "react";
import { BiSolidCertification } from "react-icons/bi";



export default function CerticateCard() {
  const [colorCertification, setColorCertification] = useState<boolean>(false)
  const invertColor = () => setColorCertification(!colorCertification)
  return (
    <>
      <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center clickable" onMouseEnter={invertColor} onMouseLeave={invertColor}>
        <p className="text-center font-semibold text-xl">Certificate Name</p>
        <p className="text-center">
          Description: This is a awesome certificate!
        </p>
        <p className="text-center">Issuer: IBM</p>
        <div className="flex items-start">
          <BiSolidCertification color={colorCertification ? '#cdae62' : '#bdbdc5'} size={60} className="group-hover:scale-150 absolute -ml-5 -mt-5 hover:text-[#9a8249] transition-all duration-300"/> 
          <Image
            alt="Project illustration"
            src="/certificate.jpg"
            height={200}
            width={400}
            className="rounded-md object-cover h-48 w-96"
          />
        </div>
      </div>
    </>
  );
}
