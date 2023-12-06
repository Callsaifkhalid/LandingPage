"use client";
import { Link } from "react-scroll/modules";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Backtotop from "@/components/backtoTopButton/backtotop";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross2 } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 300) {
        setCurrentSection("home");
      } else if (scrollPosition > 2800 && scrollPosition < 4200) {
        setCurrentSection("saving");
      } else if (scrollPosition > 4300 && scrollPosition < 7000) {
        setCurrentSection("compare");
      } else if (scrollPosition > 7800) {
        setCurrentSection("contact");
      } else {
        setCurrentSection("nothing");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Backtotop />
      <section className={styles.headerwrapper}>
        <div className={styles.logo}>
          <img src="./logo.png" alt="logo" />
        </div>
        <OutsideClickHandler onOutsideClick={() => setmenuopen(false)}>
          <div className={click? styles.headermenuu : styles.headermenu} style={getMenuStyles(menuOpen)}>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
              style={{
                color: currentSection === "home" ? "#05c8e8" : "#1a4048",
                textDecoration:
                  currentSection === "home" ? "underline" : "none",
                textUnderlineOffset: currentSection === "home" ? "5px" : "none",
                fontWeight: currentSection === "home" ? "bolder" : "",
              }}
              className={styles.menuLinks}
            >
              <span>Home</span>
            </Link>
            <Link
              activeClass="active"
              to="savings"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.menuLinks}
              style={{
                color: currentSection === "saving" ? "#05c8e8" : "#1a4048",
                textDecoration:
                  currentSection === "saving" ? "underline" : "none",
                textUnderlineOffset:
                  currentSection === "saving" ? "5px" : "none",
                fontWeight: currentSection === "saving" ? "bolder" : "",
              }}
            >
              <span>Savings Calculator</span>
            </Link>
            <Link
              activeClass="active"
              to="compare"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.menuLinks}
              style={{
                color: currentSection === "compare" ? "#05c8e8" : "#1a4048",
                textDecoration:
                  currentSection === "compare" ? "underline" : "none",
                textUnderlineOffset:
                  currentSection === "compare" ? "5px" : "none",
                fontWeight: currentSection === "compare" ? "bolder" : "",
              }}
            >
              <span>Compare Landers</span>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.menuLinks}
              style={{
                color: currentSection === "contact" ? "#05c8e8" : "#1a4048",
                textDecoration:
                  currentSection === "contact" ? "underline" : "none",
                textUnderlineOffset:
                  currentSection === "contact" ? "5px" : "none",
                fontWeight: currentSection === "contact" ? "bolder" : "",
              }}
            >
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
            111-222-333-444
          </button>
          {/* <button className={styles.getstartedbutton}>Get Started</button> */}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
