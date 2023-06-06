import { ISwiperItem } from "@/types/tapes";
import Image from "next/image";
import React, { FC } from "react";
import styles from "@/styles/SwiperItem.module.css";
import "swiper/css/bundle";

interface ISwiperItemProps extends ISwiperItem {
  isActive: number;
  id: number;
  handleClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

export const SwiperItem: FC<ISwiperItemProps> = ({
  isActive,
  title,
  image,
  subtitle,
  id,
  handleClick,
}) => {
  const stylesActive =
    isActive === id
      ? [styles.wrapper, styles["_active"]].join(" ")
      : styles.wrapper;
  return (
    <div className={stylesActive} id={id.toString()}>
      <div className={styles.icon}>
        <Image
          src={require(`@/assets/img/${image.src}`)}
          alt="icon"
          width={image.width}
          height={image.height}
        />
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
