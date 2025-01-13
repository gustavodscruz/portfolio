"use client"
import { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
export default function ResumeFrame() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button className={`border border-gray-300 rounded-md px-4 py-2 
      hover:bg-gray-300 hover:text-slate-700 clickable my-4 flex gap-2 items-center ${open ? 'bg-gray-300 text-slate-700' : ''}`}
      onClick={() => setOpen(!open)}
      >
        <span>{open ? 'Fechar' : 'Mostrar'} Currículo</span> <FaFilePdf size={20} color="#aac0c6" />
      </button>
      <iframe
        src="/curriculo.pdf"
        width={"100%"}
        height={"600px"}
        loading="lazy"
        title="Curriculo Gustavo Dias"
        className={`${open ? 'block' : 'hidden'}`}
      ></iframe>
    </>
  );
}
