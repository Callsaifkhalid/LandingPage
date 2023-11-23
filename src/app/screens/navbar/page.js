"use client";
import { Link } from "react-scroll/modules";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";

import Backtotop from "@/components/backtoTopButton/backtotop";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 300) {
        setCurrentSection("home");
      } else if (scrollPosition > 2800 && scrollPosition < 4100) {
        setCurrentSection("saving");
      } else if (scrollPosition > 4200 && scrollPosition < 5300) {
        setCurrentSection("compare");
      } else if (scrollPosition > 6600 && scrollPosition < 7500) {
        setCurrentSection("contact");
      }else{
        setCurrentSection("nothing")
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
        <div className={styles.headermenu}>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            className={styles.menuLinks}
            style={{ color: currentSection === "home" ? "#05c8e8" : "#1a4048" }}
          >
            Home
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
            }}
          >
            Savings Calculator
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
            }}
          >
            Compare Landers
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
            }}
          >
            Contact Us
          </Link>
        </div>
        {/* <div>
          <button className={styles.loginbutton}>Log In</button>
          <button className={styles.getstartedbutton}>Get Started</button>
        </div> */}
      </section>
    </div>
  );
};

export default Navbar;
