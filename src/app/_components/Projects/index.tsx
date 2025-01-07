import { Project } from "@/app/types";
export const projectsMockList: Project[] = [
  {
    id: 1,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "Java",
    image:
        "/project.jpg"
  },
  {
    id: 2,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "React",
    image:
        "/project.jpg"
  },
  {
    id: 3,
    name: "Ibm Work",
    desc: "Best of IBM",
    type: "Typescript",
    image:
        "/project.jpg"
  },
];
export default function ProjectsFilter() {
  return <div>index</div>;
}
