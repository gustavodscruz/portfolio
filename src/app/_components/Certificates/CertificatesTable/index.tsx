"use client";
import { ALL_CERTIFICATES_QUERY } from "..";
import { useQuery } from "urql";
import CerticateCard from "../CertificateCard";
import { Certificate } from "@/app/types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/app/_lib/custom-swiper-bullets.css"

export default function CertificatesTable() {
  const [result] = useQuery({
    query: ALL_CERTIFICATES_QUERY,
  });

  return (
    <div className="max-w-screen-lg m-auto flex justify-between items-center">
      <Swiper
        className="flex justify-between"
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
      >
        {result.data?.allCertificates?.map((certificate, index) => (
          <SwiperSlide key={index}>
            <CerticateCard
              key={String(certificate.id)}
              id={String(certificate.id)}
              illustration={
                certificate.illustration as Certificate["illustration"]
              }
              title={certificate.title as Certificate["title"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="grid grid-cols-3 gap-5 items-center justify-items-center">
        {result.data?.allCertificates?.map((certificate) => (
          <CerticateCard
            key={String(certificate.id)}
            id={String(certificate.id)}
            illustration={
              certificate.illustration as Certificate["illustration"]
            }
            title={certificate.title as Certificate["title"]}
          />
        ))}
      </div> */}
    </div>
  );
}
