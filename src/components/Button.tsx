import React, { FC } from "react";
import styles from "@/styles/Button.module.css";

interface IButtonProps {
  value: string;
  styleName: string;
}

export const Button: FC<IButtonProps> = ({ value, styleName }) => {
  return <button className={styles[styleName]}>{value}</button>;
};
