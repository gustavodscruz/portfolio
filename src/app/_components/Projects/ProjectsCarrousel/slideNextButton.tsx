"use client"
import { BiArrowToRight } from "react-icons/bi"
import { useSwiper } from "swiper/react"

export default function SlideNextButton() {
  const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slideNext()}><BiArrowToRight size={20} color="#b1b4c9"/> </button>
    )
}
