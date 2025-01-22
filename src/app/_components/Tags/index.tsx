"use client";

import { mappingBadgesColors } from "@/app/_components/Tags/colors-badges-mapping";
import Markdown from "react-markdown";

const skillDesc = (skill: string): [isAvailable: boolean, { color: string; logoColor: string }] => {
  if (mappingBadgesColors[skill as keyof typeof mappingBadgesColors]) {
    return [true, mappingBadgesColors[skill as keyof typeof mappingBadgesColors]]
  }
  else return [false, mappingBadgesColors["DEFAULT"]];
};

export default function Tags({
  tagList,
}: {
  tagList: { projectType: string }[];
}) {
  return (
    <>
      {tagList.map((tag, index) => {
        const lowerTag = tag.projectType.toLowerCase().replace(' ', '-');
        const [isAvailable, { color, logoColor }] = skillDesc(lowerTag);
        return (
          <Markdown key={index} className="border border-foreground">
            {`![${tag.projectType.toUpperCase()}](https://img.shields.io/badge/${lowerTag.toUpperCase()}-${color}${isAvailable ? `?style=for-the-badge&logo=${lowerTag}&logoColor=${logoColor}` : ''})`}
          </Markdown>
        );
      })}
    </>
  );
}