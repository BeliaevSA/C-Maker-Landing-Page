import { IDataAbout } from "@/types/tapes";
import Image from "next/image";
import styles from "@/styles/AboutItem.module.css";
import React, { FC } from "react";

interface IAboutItem {
  about: IDataAbout;
}

export const AboutItem: FC<IAboutItem> = ({ about }) => {
  return (
    <div className={styles.container}>
      <div className={styles["bg-image"]}>
        <Image
          src={require(`@/assets/img/${about.icon.src}`)}
          alt="icon"
          width={about.icon.width}
          height={about.icon.height}
        />
      </div>
      <h4 className={styles.title}>{about.title}</h4>
      <p className={styles.subtitle}>{about.description}</p>
      <div className={styles.line}></div>
    </div>
  );
};
