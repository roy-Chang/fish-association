import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slogan } from "./styled";
import SwiperCore, { Pagination } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../../../assets/css/styled.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Autoplay } from "swiper";

export default function Banner() {
  SwiperCore.use([Pagination]);
  SwiperCore.use([Autoplay]);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination}
        autoplay={{ delay: 8000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.zenfs.com/en/yahoo__216/14b910c01f9c59136a4883fd1ac9580c"
            alt="正濱漁港banner"
            正濱漁港
          />
          <Slogan>
            <h1>地方深度體驗</h1>
            <p>
              正濱漁港，舊稱基隆漁港
              <br />
              位於基隆市中正區正濱里與和平島南方
            </p>
          </Slogan>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
