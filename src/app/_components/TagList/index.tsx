"use client"

import { Carousel} from "@material-tailwind/react";
import Tag from "./Tag";

export default function TagList() {
  const tags = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="w-36 m-auto flex justify-center">
      <Carousel className="m-auto flex justify-between" onPointerEnterCapture={null} onPointerLeaveCapture={null} placeholder={null} aria-colindex={5} aria-colcount={10}>
        {tags.map(i => <Tag key={i} />)}
      </Carousel>
    </div>
  );
}
