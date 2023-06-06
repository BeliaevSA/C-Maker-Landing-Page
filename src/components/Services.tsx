import React, { FC, useEffect, useState } from "react";
import { SwiperItem } from "./SwiperItem";
// import { dataServices } from "@/data/dataServices";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/styles/Services.module.css";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { IDataServices } from "@/types/tapes";

interface IServicesProps {
  windowWidth: number;
  slider: IDataServices[];
}

export const Services: FC<IServicesProps> = ({
  windowWidth,
  slider,
}) => {
  const [isActive, setIsActive] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    if (windowWidth >= 1400) setSlidesPerView(4);
    if (windowWidth < 1400 && windowWidth >= 1140)
      setSlidesPerView(3);
    if (windowWidth < 1140 && windowWidth >= 760) setSlidesPerView(2);
    if (windowWidth < 760) setSlidesPerView(1);
  }, [windowWidth]);

  const handleActiveSlide: React.MouseEventHandler<
    HTMLDivElement
  > = e => {
    e.stopPropagation();
    console.log(e.target);
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles["services-container"]}>
        <h3 className={styles.title}>We provide great services</h3>
        <p className={styles.description}>
          We help people to think independent. Be the boss of your
          brand and be the storyteller. An appropriate approach.
        </p>
        <div className={styles["swiper-container"]}>
          {/* <div className={styles["swiper-wrapper"]}> */}
          <Swiper
            className={styles.mySwiper}
            slidesPerView={slidesPerView}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            onClick={swiper => {
              setIsActive(swiper.clickedIndex);
            }}>
            {slider.map(item => (
              <SwiperSlide key={item.title}>
                <SwiperItem
                  isActive={isActive}
                  title={item.title}
                  image={item.image}
                  subtitle={item.subtitle}
                  id={item.idItem}
                  handleClick={handleActiveSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* </div> */}
          <div className={styles.info}>
            {slider.map(item =>
              item.idItem === isActive ? (
                <div
                  className={styles["info-container"]}
                  key={item.id}>
                  <h3 className={styles["info-title"]}>
                    {item.name}
                  </h3>
                  <p className={styles["info-subtitle"]}>
                    {item.profession}
                  </p>
                  <p className={styles["info-description"]}>
                    {item.description}
                  </p>
                  <button className={styles.btn}>Learn More</button>
                </div>
              ) : null
            )}
            <Image
              src={require("@/assets/img/services-info.png")}
              alt="services"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
