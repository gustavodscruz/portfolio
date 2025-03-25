import { buildClient, Client } from "@datocms/cma-client-node";
import { Project } from "../types";



export async function saveNotionProjectOnDato(project : Project) {
  // Make sure the API token has access to the CMA, and is stored securely
  console.log(process.env.NEXT_DATOCMS_API_TOKEN)
  console.log(process.env.DATOCMS_PROJECT_MODEL_ID)
  const client = buildClient({
    apiToken: process.env.NEXT_DATOCMS_API_TOKEN!,
  });

  const record = await client.items.create({
    item_type: {
      type: "item_type",
      id: process.env.DATOCMS_PROJECT_MODEL_ID!,
    },
    title: project.title,
    // tags: project.demo.map((tag) => tag.projectType),
    project_demo: project.projectDemo,
    github_link: project.githubLink,
    description: project.description,
  });

  uploadImage(client, project.illustration.url, formatFilename(project.title))
  console.log(record);
}



async function uploadImage(client : Client, url : Project["illustration"]['url'], filename : string){


  const upload = await client.uploads.createFromUrl({
    // remote URL to upload
    url,
    // if you want, you can specify a different base name for the uploaded file
    filename,
    // skip the upload and return an existing resource if it's already present in the Media Area:
    skipCreationIfAlreadyExists: true,
    // specify some additional metadata to the upload resource
    author: "Gustavo Dias",
    copyright: "New copyright",
  });

  console.log(upload);
}

const formatFilename = (title: string): string => {
  return title
    .toLowerCase()
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove caracteres diacríticos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .trim() // Remove espaços extras no começo e no fim
    .replace(/\s+/g, "-") + ".png"; // Substitui espaços por hífen e adiciona extensão
};


export const projectTest: Project = {
  illustration: {
    url: "https://www.example.com/image.jpg",
    height: 100,
    width: 100,
  },
  id: 1,
  title: "Project title",
  description: "Project description",
  githubLink: "github.com",
  projectDemo: "project.com",
  demo: [
    {
      projectType: "Java",
    },
    {
      projectType: "Typescript",
    },
    {
      projectType: "React",
    },
  ],
};

