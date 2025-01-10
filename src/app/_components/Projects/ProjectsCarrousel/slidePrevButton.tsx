"use client"
import { BiArrowToLeft} from "react-icons/bi"
import { useSwiper } from "swiper/react"

export default function SlidePrevButton() {
  const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slidePrev()}><BiArrowToLeft  size={20} color="#b1b4c9"/> </button>
    )
}
