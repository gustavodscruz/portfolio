"use client";

import {
  A11y,
  Navigation,
  Pagination,
  Virtual,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServicesSection() {
  return (
    <div className="max-w-screen-lg m-auto flex justify-between items-center max-sm:w-[80vw]">
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
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Navigation, Pagination, A11y, Virtual]}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center min-h-16 flex items-center justify-center text-background">
              WordPress & Elementor
            </h3>
            <p className="text-sm mt-2 text-center text-background min-h-20 items-center flex justify-center">
              Desenvolvimento rápido de sites e páginas de destino
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center min-h-16 flex items-center justify-center text-background">
              Java | Spring Boot
            </h3>
            <p className="text-sm mt-2 text-center text-background min-h-20 items-center flex justify-center">
              Back-end de aplicações robustas e escaláveis
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center min-h-16 flex items-center justify-center text-background">
              Next.js | React
            </h3>
            <p className="text-sm mt-2 text-center text-background min-h-20 items-center flex justify-center">
              Front-ends poderosos e landing pages modernas
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-center min-h-16 flex items-center justify-center text-background">
              Python
            </h3>
            <p className="text-sm mt-2 text-center text-background min-h-20 items-center flex justify-center">
              Análise de dados e construção de serviços com inteligência artificial
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
