"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross2 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import styles from "./calculatornavbar.module.css";
const CalculatorNavbar = () => {
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
        <img src="../logo.svg" alt="logo" width={250} />
      </div>
      <OutsideClickHandler onOutsideClick={() => setmenuopen(false)}>
        <div
          className={click ? styles.headermenuu : styles.headermenu}
          style={getMenuStyles(menuOpen)}
        >
          <Link href={"/#hero"} className={styles.menuLinks}>
            <span>Home</span>
          </Link>
          <Link
            href={"/#savings"}
            className={styles.menuLinks}
            style={{
              color: "#05c8e8",
              textDecoration: "underline",
              textUnderlineOffset: "5px",
              fontWeight: "bolder",
            }}
          >
            <span>Savings Calculator</span>
          </Link>
          <Link href={"/#compare"} className={styles.menuLinks}>
            <span>Compare Lenders</span>
          </Link>

          <Link href={"/blogs"} className={styles.menuLinks}>
            <span>Blogs</span>
          </Link>
          <Link href={"/#contact"} className={styles.menuLinks}>
            <span>Contact Us</span>
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
          1-844-208-1100
        </button>
      </div>
    </section>
  );
};

export default CalculatorNavbar;
