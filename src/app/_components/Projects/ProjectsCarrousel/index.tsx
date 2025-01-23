"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "urql";
import { AllProjectsCards } from "..";
import { ProjectCardType } from "@/app/types";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
  // EffectCoverflow
//   Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/app/_lib/custom-swiper-bullets.css"

import ProjectCard from "../ProjectCard";

export default function ProjectsCarrousel() {
  const [result] = useQuery({
    query: AllProjectsCards,
  });

  const getProjects = (): ProjectCardType[] | null => {
    if (result.data?.allProjects)
      return result.data?.allProjects as ProjectCardType[];
    else return null;
  };

  const projects = getProjects();
  
  const isOne = projects && projects.length < 3 
  return (
    <div className="max-w-screen-lg m-auto flex justify-between items-center max-sm:w-[80vw] ">
      <Swiper
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className="flex justify-between"
        breakpoints={{
          300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView:
              projects && projects?.length < 2
                ? projects.length
                : 2,
            slidesPerGroup:
              projects && projects?.length < 2
                ? projects.length
                : 2,
          },
          1200: {
            slidesPerView:
              projects && projects?.length < 3
                ? projects?.length
                : 3,
            slidesPerGroup:
              projects && projects?.length < 3
                ? projects?.length
                : 3,
          },
        }}
        // width={720}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        // slidesPerGroup={1}
        // slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{ clickable: true }}
      >
        {projects &&
          projects.map((project, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <ProjectCard project={project} key={index} isOne={isOne ?? true}/> 
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
