import React from "react";
import styles from "@/styles/TheTeam.module.css";
import Image from "next/image";

export const TheTeam = () => {
  return (
    <section className={styles.container} id="team">
      <h3 className={styles.title}>Watch how we work</h3>
      <p className={styles.description}>
        Capture more customers with a great brand recall. Whether you
        need a tising or as a tagline for your business, our slogan
        generator will help you come up with us.
      </p>
      <Image
        src={require("@/assets/img/play-button.png")}
        alt="play"
        className={styles.play}
      />
    </section>
  );
};
