import { FC } from "react";
import { Link } from "react-scroll";
import styles from "@/styles/NavLink.module.css";
import { INavLink } from "../types/tapes";

export const NavLink: FC<INavLink> = ({ value, link }) => {
  link = link ? link : value.toLowerCase();

  return (
    <li>
      <Link
        activeClass={styles.active}
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
