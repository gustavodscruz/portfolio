"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "urql";
import { AllProjectsCards } from "..";
import { ProjectCardType } from "@/app/types";
import {
  A11y,
  Autoplay,
//   EffectFade,
  Navigation,
  Pagination,
  Virtual,
//   Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/app/_lib/custom-swiper-bullets.css"

// import Image from "next/image";
import ProjectCard from "../ProjectCard";
// import SlidePrevButton from "./slidePrevButton";
// import SlideNextButton from "./slideNextButton";

export default function ProjectsCarrousel() {
  const [result] = useQuery({
    query: AllProjectsCards,
  });

  const getProjects = () => {
    if (result.data?.allProjects)
      return result.data?.allProjects as ProjectCardType[];
    else return null;
  };

  const projects = getProjects();

  return (
    <div className="max-w-screen-lg m-auto flex justify-between items-center">
      <Swiper
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className="flex justify-between"
        // width={720}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // centeredSlides={true}
        navigation
        // effect="fade"
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // autoplay={{ delay: 500 }}
      >
        {projects &&
          projects.map((project, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <ProjectCard project={project} key={index}/> 
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
