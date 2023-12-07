"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross2 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import styles from "./blognavbar.module.css";
const BlogNavbar = () => {
  const [menuOpen, setmenuopen] = useState(false);
  const [click, setClick] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (typeof window !== "undefined") {
      if (document.documentElement.clientWidth <= 800) {
        {
          return { right: !menuOpen && "-100%" };
        }
      }
    }
  };
  return (
    <section className={styles.headerwrapper}>
      <div className={styles.logo}>
        <img src="../logo.png" alt="logo" />
      </div>
      <OutsideClickHandler onOutsideClick={() => setmenuopen(false)}>
        <div
          className={click ? styles.headermenuu : styles.headermenu}
          style={getMenuStyles(menuOpen)}
        >
          <Link href={"/"} className={styles.menuLinks}>
            <span>Home</span>
          </Link>
          <Link
            href={"/screens/blogs"}
            className={styles.menuLinks}
            style={{
              color: "#05c8e8",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontWeight: "bolder",
            }}
          >
            <span>Blogs</span>
          </Link>
        </div>
      </OutsideClickHandler>
      <div
        className={styles.menuicon}
        onClick={() => setmenuopen((prev) => !prev)}
      >
        {!menuOpen && (
          <GiHamburgerMenu
            size={28}
            style={{ marginRight: "0.5rem" }}
            onClick={() => setClick(true)}
          />
        )}
        {menuOpen && <RxCross2 size={28} style={{ marginRight: "0.5rem" }} />}
      </div>
      <div>
        <button className={styles.loginbutton}>
          <FaPhone />
          111-222-333-444
        </button>
      </div>
    </section>
  );
};

export default BlogNavbar;
