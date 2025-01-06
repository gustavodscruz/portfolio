"use client";
import { Project } from "@/app/types";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { projectsMockList } from "..";
import ProjectsTable from "../ProjectTable";
type ProjectTabs = {
    listTabs : Project['type'][]
}
export default function ProjectsTabs({listTabs}: ProjectTabs) {
  const [selected, setSelected] = useState<Project['type'] | null>();
  const filteredProjects : Project[] = projectsMockList.filter(project => project.type === selected)
  return (
    <div>
      <Tabs
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as Project['type'])}
      >
        {listTabs.map((tab) => (
          <Tab key={tab} title={
            <span className="rounded-md border border-foreground px-3 py-1 hover:scale-125 hover:bg-foreground hover:text-background transition-all duration-300">{tab}</span> 
            }>
            <ProjectsTable projects={filteredProjects} /> 
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
