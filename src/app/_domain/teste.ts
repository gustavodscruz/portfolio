export const createItem = async () => {
    const response = await fetch("https://site-api.datocms.com/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Version": "3",
        "Authorization": `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`, // Token da API
      },
      body: JSON.stringify({
        data: {
          item_type: {
            type: "item_type",
            id: process.env.DATOCMS_PROJECT_MODEL_ID, // ID do modelo do item
          },
          title: "Meu Projeto",
          description: "Descrição do projeto",
          projectDemo: "https://meuprojeto.com",
          githubLink: "https://github.com/meuprojeto",
        },
      }),
    });
  
    const data = await response.json();
    console.log(data.data);
  };
  
  