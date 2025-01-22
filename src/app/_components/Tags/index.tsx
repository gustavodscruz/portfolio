import { mappingBadgesColors } from "@/app/_components/Tags/colors-badges-mapping";
import Markdown from "react-markdown";

const skillColor = (skill: string) => {
  return (
    mappingBadgesColors as Record<string, { color: string; logoColor: string }>
  )[skill ?? "DEFAULT"];
};

export default function Tags({
  tagList,
}: {
  tagList: { projectType: string }[];
}) {
  return tagList.map((tag, index) => {
    const lowerTag = tag.projectType.toLowerCase();
    const { color, logoColor } = skillColor(lowerTag);
    return (
      <Markdown key={index}>
        {`![${tag.projectType}](https://img.shields.io/badge/${lowerTag}-${color}?style=for-the-badge&logo=${lowerTag}&logoColor=${logoColor})`}
      </Markdown>
    );
  });
}
