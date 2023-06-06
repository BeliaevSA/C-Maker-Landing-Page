import React, { FC } from "react";
import styles from "@/styles/Footer.module.css";
import { PricingItem } from "./PricingItem";
import { FooterNavItem } from "./FooterNavItem";
import { Social } from "./Social";
import { IDataPrices } from "@/types/tapes";

interface IFooterProps {
  dataPrices: IDataPrices[];
}

export const Footer: FC<IFooterProps> = ({ dataPrices }) => {
  return (
    <footer className={styles.footer} id="pricing">
      <section className={styles.pricing}>
        {dataPrices.map(item => (
          <PricingItem data={item} key={item.id} />
        ))}
      </section>
      <section className={styles["contacts-container"]}>
        <div className={styles.contacts}>
          <ul className={styles.nav}>
            <FooterNavItem value="Home" />
            <FooterNavItem value="Services" />
            <FooterNavItem value="The Team" link="team" />
            <FooterNavItem value="About" />
            <FooterNavItem value="Reviews" />
            <FooterNavItem value="Pricing" />
          </ul>
          <div className={styles.social}>
            <Social src={require("@/assets/img/icon03.png")} />
            <Social src={require("@/assets/img/icon04.png")} />
            <Social src={require("@/assets/img/icon02.png")} />
            <Social src={require("@/assets/img/icon01.png")} />
          </div>
        </div>

        <p className={styles.info}>
          @ A new era 2016. Awesome wireframe by Andrei Dorin
        </p>
      </section>
    </footer>
  );
};
