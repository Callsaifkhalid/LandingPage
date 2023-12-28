"use client";
import React from "react";
import styles from "./swiper.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
const ImageSwiper = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
       spaceBetween={30}
       centeredSlides={true}
       slidesPerView={5}
       loop={true}
       autoplay={{
         delay: 1000,
         disableOnInteraction: false,
       }}
       modules={[Autoplay]}
       breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        421: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        717: {
          slidesPerView: 3,
          spaceBetween: -18,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
        className={styles.swiper}
      >
        <SliderButton />
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./upstartlogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./bestegglogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./lendingclublogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./onemainlogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./penfedlogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./sofilogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./discoverlogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./bhgmoneylogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./zablelogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./happymoneylogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./reachlogo.svg" width={150} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <img src="./universallogo.svg" width={150} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.button}>
      <button
        onClick={() => swiper.slidePrev()}
        className={styles.sliderbutton}
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={styles.sliderbutton}
      >
        &gt;
      </button>
    </div>
  );
};
