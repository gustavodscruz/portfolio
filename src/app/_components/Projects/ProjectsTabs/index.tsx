"use client";
import {Tag } from "@/app/types";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import ProjectsTable from "../ProjectTable";
import { useQuery } from "urql";
import { AllTags } from "../../Tags";
export default function ProjectsTabs() {
  const [result] = useQuery({
    query : AllTags
  })
  const getTags = () => {
    if (result.data?.allTags ) return result.data!.allTags! as Tag[]
    else return null
  }

  const tags = getTags()
  console.log(tags)
  const [selected, setSelected] = useState(tags && tags.length > 0 ? tags[0].projectType : "");
  return (
    <div>
      {tags != null  ? (
        <Tabs
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as Tag['projectType'])}
        >
          {tags.map((tag, index) => (
            <div key={index}>
              <Tab key={tag.projectType} title={
                <span className="rounded-md border border-foreground px-3 py-1 hover:scale-125 hover:bg-foreground hover:text-background transition-all duration-300">{tag.projectType}</span>
              }>
                <ProjectsTable typeId={tag.id} /> 
              </Tab>
            </div>
          ))}
        </Tabs>
      ) : 
      (<div>Texto não encontrado</div>)}
    </div>
  );
}
    
