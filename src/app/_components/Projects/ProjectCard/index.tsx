import Image from "next/image"

export default function ProjectCard() {
  return (
    <div className="rounded-md py-4 px-6 border border-foreground flex flex-col gap-4 items-center justify-center">
        <p className="text-center font-semibold text-xl">Project Name</p>
        <p className="text-center">Description: This is a awesome project!</p>
        <Image alt="Project illustration" src="/project.jpg" height={200} width={400} className="rounded-md bg-cover h-48 w-96"/>
        <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-slate-700 clickable my-4 ">View Details</button>
    </div>
  )
}
