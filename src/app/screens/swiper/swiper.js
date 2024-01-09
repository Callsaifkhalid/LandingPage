"use client";
import React from "react";
import styles from "./swiper.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
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
            <a href="https://www.upstart.com/" target="_blank">
              <img src="./upstartlogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.bestegg.com/" target="_blank">
              <img src="./bestegglogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.lendingclub.com/" target="_blank">
              <img src="./lendingclublogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.onemainfinancial.com/" target="_blank">
              <img src="./onemainlogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.penfed.org/" target="_blank">
              <img src="./penfedlogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.sofi.com/" target="_blank">
              <img src="./sofilogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.discover.com/personal-loans/" target="_blank">
              <img src="./discoverlogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://bhgmoney.com/" target="_blank">
              <img src="./bhgmoneylogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://zable.co.uk/cards" target="_blank">
              {" "}
              <img
                src="./zablelogo.svg"
                width={150}
                className={styles.zablelogo}
              />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://happymoney.com/" target="_blank">
              <img src="./happymoneylogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.reach.com/" target="_blank">
              <img src="./reachlogo.svg" width={150} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <div className={styles.div}>
            <a href="https://www.universal-credit.com/" target="_blank">
              <img src="./universallogo.svg" width={150} />
            </a>
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
