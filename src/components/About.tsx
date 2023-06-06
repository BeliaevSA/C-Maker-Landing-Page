import React, { FC } from "react";
import styles from "@/styles/About.module.css";
import { AboutItem } from "./AboutItem";
import { IDataAbout } from "@/types/tapes";

interface IAboutProps {
  dataAbout: IDataAbout[];
}

export const About: FC<IAboutProps> = ({ dataAbout }) => {
  return (
    <section className={styles.container} id="about">
      <h3 className={styles.title}>Best features in the world</h3>
      <p className={styles.description}>
        Capture more customers wd recall. Whether you need a tising or
        as a tagline for you. Capture more customers wd recall.
        Whether you need a tising or as a tagline for you.
      </p>
      <div className={styles.info}>
        {dataAbout.map(item => (
          <AboutItem key={item.id} about={item} />
        ))}
      </div>
    </section>
  );
};
