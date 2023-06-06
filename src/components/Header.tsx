import React, { FC, useState } from "react";
import styles from "@/styles/Header.module.css";
import { NavLink } from "./NavLink";
import {
  IDataHomePage,
  IImage,
  INavLink,
  ITitleHeader,
} from "../types/tapes";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "./Button";
import Image from "next/image";

interface IHeaderProps {
  dataHomePage: IDataHomePage;
}

export const Header: FC<IHeaderProps> = ({ dataHomePage }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);

  const dataNavLink: INavLink[] = [
    { value: "Home" },
    { value: "Services" },
    { value: "The Team", link: "team" },
    { value: "About" },
    { value: "Reviews" },
    { value: "Pricing" },
  ];

  const styleNavList = openMobileMenu
    ? styles["nav-list"]
    : [styles["nav-list"], styles["_active"]].join(" ");

  const handleClickShowMenu = () => setOpenMobileMenu(pre => !pre);

  return (
    <header className={styles.header} id="home">
      <div className={styles["nav-fixed"]}>
        <div className={styles["nav-container"]}>
          <Image
            className={styles.logo}
            src={require(`@/assets/img/${dataHomePage.logo.src}`)}
            alt="logo"
            width={dataHomePage.logo.width}
            height={dataHomePage.logo.height}
          />
          <div className={styles.nav}>
            <nav>
              <ul className={styleNavList}>
                {dataNavLink.map(item => (
                  <NavLink
                    key={item.value}
                    value={item.value}
                    link={item.link ? item.link : null}
                  />
                ))}
                <li className={styles["menu-close"]}>
                  <IoCloseSharp
                    className={styles["icon-menu-close"]}
                    onClick={handleClickShowMenu}
                  />
                </li>
              </ul>
            </nav>
            <Button styleName="button-sign-up" value="Sign Up" />
            <AiOutlineMenu
              className={styles["icon-menu"]}
              onClick={handleClickShowMenu}
            />
          </div>
        </div>
      </div>

      <div className={styles["body-container"]}>
        <div className={styles.info}>
          <h2 className={styles.title}>
            <span>{dataHomePage.titleHeader.highlightTextOne}</span>
            {dataHomePage.titleHeader.basicText}
            <span>{dataHomePage.titleHeader.highlightTextTwo}</span>
          </h2>
          <p className={styles.description}>
            We are here to give you effective ideas. We help the
            brands to become what they want.
          </p>
          <Button styleName="button-started" value="Get Started" />
        </div>
      </div>
    </header>
  );
};
