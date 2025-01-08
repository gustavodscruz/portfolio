"use client";
import { Project, Tag } from "@/app/types";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { projectsMockList } from "..";
import ProjectsTable from "../ProjectTable";
import { useQuery } from "urql";
import { AllTags } from "../../Tags";


type ProjectTabs = {
  listTabs : Project['type'][]
}
export default function ProjectsTabs() {
  const [result] = useQuery({
    query : AllTags
  })
  const tags = result.data?.allTags 
  const [selected, setSelected] = useState<Project['type'] | null>();
  const filteredProjects : Project[] = projectsMockList.filter(project => project.type === selected)
  return (
    <div>
      {tags ? (
        <Tabs
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as Project['type'])}
        >
          {tags!.map((tag, index) => (
            <Tab key={index} title={
              <span className="rounded-md border border-foreground px-3 py-1 hover:scale-125 hover:bg-foreground hover:text-background transition-all duration-300">{tag.projectType}</span> 
              }>
              <ProjectsTable projects={filteredProjects} /> 
            </Tab>
          ))}
        </Tabs>

      ) : }
    </div>
  );
}
