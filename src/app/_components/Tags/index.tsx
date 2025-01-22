"use client";

import { useState } from "react";
import { mappingBadgesColors } from "@/app/_components/Tags/colors-badges-mapping";
import Markdown from "react-markdown";

const skillColor = (skill: string): { color: string; logoColor: string } => {
  return mappingBadgesColors[skill] ?? mappingBadgesColors["DEFAULT"];
};

export default function Tags({
  tagList,
}: {
  tagList: { projectType: string }[];
}) {
  return (
    <>
      {tagList.map((tag, index) => {
        const lowerTag = tag.projectType.toLowerCase();
        const { color, logoColor } = skillColor(lowerTag);
        return (
          <Markdown key={index} className="border border-foreground">
            {`![${tag.projectType}](https://img.shields.io/badge/${lowerTag}-${color}?style=for-the-badge&logo=${lowerTag}&logoColor=${logoColor})`}
          </Markdown>
        );
      })}
    </>
  );
}