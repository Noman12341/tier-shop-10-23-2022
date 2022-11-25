import React from "react";
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./slider.css";

import ProductCard from "../ProductCard/ProductCard";
function Slider() {
  return (
    <div>
      <Swiper
      className="pt-5"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard size="sm" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
