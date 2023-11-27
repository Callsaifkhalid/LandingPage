"use client";
import { Link } from "react-scroll/modules";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Backtotop from "@/components/backtoTopButton/backtotop";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross2 } from "react-icons/rx";
import dynamic from "next/dynamic";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("");
  const [menuOpen, setmenuopen] = useState(false);
  

  const getMenuStyles = (menuOpen)=>{
    if(typeof window ){
    if(document.documentElement.clientWidth <= 800){
      {
        return { right: !menuOpen && '-100%'}
      }
    }}
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 300) {
        setCurrentSection("home");
      } else if (scrollPosition > 2800 && scrollPosition < 4100) {
        setCurrentSection("saving");
      } else if (scrollPosition > 4200 && scrollPosition < 5300) {
        setCurrentSection("compare");
      } else if (scrollPosition > 8000 && scrollPosition < 9000) {
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
        <OutsideClickHandler onOutsideClick={()=>setmenuopen(false)}>
        <div className={styles.headermenu} style={getMenuStyles(menuOpen)}>
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            style={{
              color: currentSection === "home" ? "#05c8e8" : "#1a4048",
              textDecoration: currentSection === "home" ? "underline" : "none",
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
          {!menuOpen && <GiHamburgerMenu size={25}/>}
          {menuOpen &&<RxCross2  size={25}/>}
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
