import React, { FC } from "react";
import { Button } from "./Button";
import styles from "@/styles/GetStarted.module.css";

export const GetStarted = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        People have tried to predict the future since the dawn of
        time.
      </h3>
      <Button styleName="button-started" value="Get Started " />
    </section>
  );
};
