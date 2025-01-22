"use client";
import { ALL_CERTIFICATES_QUERY } from "..";
import { useQuery } from "urql";
import CerticateCard from "../CertificateCard";
import { CertificateCardType } from "@/app/types";
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
import "@/app/_lib/custom-swiper-bullets.css";

export default function CertificatesTable() {
  const [result] = useQuery({
    query: ALL_CERTIFICATES_QUERY,
  });

  const getCertificates = () => {
    if (result.data?.allCertificates)
      return result.data?.allCertificates as CertificateCardType[];
    else return null;
  };

  const certificates = getCertificates();

  return (
    <div className="max-w-screen-lg m-auto flex justify-between items-center max-sm:w-[80vw]">
      <Swiper
        suppressHydrationWarning={true}
        suppressContentEditableWarning={true}
        className="flex justify-between"
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Navigation, Pagination, A11y, Virtual, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView:
              certificates && certificates?.length < 2
                ? certificates.length
                : 2,
            slidesPerGroup:
              certificates && certificates?.length < 2
                ? certificates.length
                : 2,
          },
          1200: {
            slidesPerView:
              certificates && certificates?.length < 3
                ? certificates?.length
                : 3,
            slidesPerGroup:
              certificates && certificates?.length < 3
                ? certificates?.length
                : 3,
          },
        }}
        // centeredSlides={true}
        navigation
        // effect="fade"
        pagination={{ clickable: true }}
      >
        {certificates &&
          certificates.map((certificate, index) => (
            <SwiperSlide key={index}>
              <CerticateCard
                key={String(certificate.id)}
                {...certificate}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
