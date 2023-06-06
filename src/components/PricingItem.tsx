import { IDataPrices } from "@/types/tapes";
import React, { FC } from "react";
import { Button } from "./Button";
import styles from "@/styles/PricingItem.module.css";

interface IPricingItemProps {
  data: IDataPrices;
}

export const PricingItem: FC<IPricingItemProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data.title}</h3>
      <div className={styles.price}>
        <span className={styles["price-currency"]}>$</span>
        {data.price}
        <span className={styles["price-other"]}>/mo</span>
      </div>
      <ul className={styles["data-wrapper"]}>
        {data.list.map((item, index) => (
          <li key={index} className={styles["data-value"]}>
            {item}
          </li>
        ))}
      </ul>
      <div>
        <Button styleName="footer-subscribe" value="Subscribe" />
      </div>
    </div>
  );
};
