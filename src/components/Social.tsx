import Image from "next/image";
import React, { FC } from "react";
import styles from "@/styles/Social.module.css";

interface ISocialProps {
  src: string;
}

export const Social: FC<ISocialProps> = ({ src }) => {
  return (
    <div>
      <Image src={src} alt="icon-social" className={styles.icon} />
    </div>
  );
};
