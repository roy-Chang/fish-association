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

/* img */

import banner01 from "../../../assets/img/Activity/banner01.jpg";
import banner02 from "../../../assets/img/Activity/banner02.jpeg";
import banner03 from "../../../assets/img/Activity/banner03.jpeg";
import banner04 from "../../../assets/img/Activity/banner04.jpeg";
//Swiper的設定檔
export default function Banner() {
  SwiperCore.use([Pagination]);
  SwiperCore.use([Autoplay]);
  const pagination = {
    clickable: true, //控制Swiper切換
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        pagination={pagination} //分頁物件
        autoplay={{ delay: 8000 }} //停留時間設定
        className="mySwiper" //連結css樣式
      >
        <SwiperSlide>
          <img src={banner01} alt="正濱漁港banner" />
          <Slogan>
            <h1>地方深度體驗</h1>
            <p>
              正濱漁港，舊稱基隆漁港
              <br />
              位於基隆市中正區
            </p>
          </Slogan>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner02} alt="深澳漁港banner" />
          <Slogan>
            <h1>漁產資源豐富</h1>
            <p>
              深澳漁港，舊名蕃仔澳
              <br />
              位於新北市瑞芳區
            </p>
          </Slogan>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner03} alt="龍洞banner" />
          <Slogan>
            <h1>透清涼好去處</h1>
            <p>
              龍洞，古代寫作撈洞
              <br />
              位於新北市貢寮區
            </p>
          </Slogan>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner04} alt="龜吼banner" />
          <Slogan>
            <h1>傳統技藝傳承</h1>
            <p>
              龜吼漁港，昔日以龜吼莊得名
              <br />
              位於新北市萬里區
            </p>
          </Slogan>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
