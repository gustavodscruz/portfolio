import { Carousel} from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import Tag from "./Tag";

export default function TagList() {
  return (
    <div>
      <Carousel onPointerEnterCapture={null} onPointerLeaveCapture={null} placeholder={null}  autoplay={true} >
        {Array.from({ length: 10 }, (_, i) => <Tag key={i}  />)}
      </Carousel>
    </div>
  );
}
