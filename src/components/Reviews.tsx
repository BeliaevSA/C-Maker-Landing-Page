import React from "react";
import styles from "@/styles/Reviews.module.css";
import Image from "next/image";
import logo from "@/assets/img/reviews-logo.png";
import reviewImg from "@/assets/img/review-1.png";

export const Reviews = () => {
  return (
    <section className={styles.container} id="reviews">
      <Image src={logo} alt="logo" className={styles.logo} />
      <p className={styles.review}>
        “Always a pleasure to work with The Agency Creative. Such
        professional and happy people and you know you’ll receive a
        quick innovative and no fuss service.”
      </p>
      <div className={styles.info}>
        <Image
          src={reviewImg}
          alt="image-rebiew"
          className={styles.img}
        />
        <div className={styles["info-wrapper"]}>
          <h4 className={styles.name}>Johnatan Doe </h4>
          <p className={styles.profi}>Web Designer</p>
        </div>
      </div>
    </section>
  );
};
