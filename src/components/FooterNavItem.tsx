import React, { FC } from "react";
import { Link } from "react-scroll";
import styles from "@/styles/FooterNavItem.module.css";

interface IFooterNavItemProps {
  value: string;
  link?: string;
}

export const FooterNavItem: FC<IFooterNavItemProps> = ({
  value,
  link,
}) => {
  link = link ? link : value.toLowerCase();
  return (
    <li className={styles.container}>
      <Link
        to={link}
        spy={true}
        smooth={true}
        offset={0}
        duration={0}
        className={styles.link}>
        {value}
      </Link>
    </li>
  );
};
