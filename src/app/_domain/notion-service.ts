import { Client } from "@notionhq/client";
import { Project } from "../types";

async function getPageContent(pageId, notion) {
  const response = await notion.blocks.children.list({ block_id: pageId });

  return response.results
    .map((block) => {
      if (block[block.type]?.rich_text) {
        return block[block.type].rich_text
          .map((text) => text.plain_text)
          .join("");
      }
      return "";
    })
    .filter((text) => text !== "")
    .join("\n");
}

function getPageContentText(response: Promise<any>) {
  response.then((r: string | null) => {
    return r;
  });
}

export async function getNotionData() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Sincronizado",
      checkbox: { equals: false }, // Filtra apenas as não sincronizadas
    },
  });

  const lista : Project[] = [];

  // Use Promise.all para esperar todas as promises serem resolvidas
  const pages = await Promise.all(
    response.results.map(async (page) => {
      lista.push({
        id: page.id,
        title: page.properties.Title.title[0].plain_text,
        illustration: page.properties.Illustration.files[0].name,
        demo: []page.properties.Tags.multi_select.map((tag) => tag.name),
        projectDemo: page.properties["Project Demo"].url,
        githubLink: page.properties["Github Link"].url,
        description: await getPageContent(page.id, notion),
      });
      markNotionPageAsUpdated(page.id, notion);
    })
  );

  return lista;
}

async function markNotionPageAsUpdated(pageId, notion) {
  await notion.pages.update({
    page_id: pageId,
    properties: {
      Sincronizado: { checkbox: true },
    },
  });
}

// console.log(getNotionData());
