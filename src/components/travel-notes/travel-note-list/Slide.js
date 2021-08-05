import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";

// import Swiper core and required modules
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
  

// Slide Img import
import Img01 from '../../../assets/img/travel-notes/04-1.jpg';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Slide() {

  return (
    <>
    <Swiper spaceBetween={30} loop={true} centeredSlides={true} autoplay={{
        "delay": 2000,
        "disableOnInteraction": false
    }} pagination={{
        "clickable": true
    }} navigation={true} className="mySwiper swiper-container-TN">
        <SwiperSlide className="swiper-slide-TN">
            <img src={Img01} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
    </>
  );
}
