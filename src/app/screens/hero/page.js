"use client";
import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={styles.herowrapper} id="hero">
      <div className={styles.flexCenter + " " + styles.herocontainer}>
        {/* left side */}
        <div className={styles.flexColStart + " " + styles.heroleft}>
          <div className={styles.herotitle}>
            <motion.h2
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Debt Consolidation
              <br /> Made Easy.
            </motion.h2>
            <div className={styles.flexColStart + " " + styles.herodes}>
              <span>
                Compare Rates From <br />
                Multiple Lenders in Minutes
              </span>
            </div>
          </div>
          <div className={styles.checknow}>
            <button>Check Now</button>
            <span>Your Personalized Rates</span>
          </div>
          <div className={styles.ovals}>
            <img src="./Oval1.png" alt="" />
            <img src="./Oval3.png" alt="" />
            <img src="./Oval2.png" alt="" />
            <span>50,000+ clients around the world</span>
          </div>
        </div>
        {/* right side */}
        <div className={styles.flexCenter + " " + styles.heroright}>
          <motion.div
            className={styles.imagecontainer}
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img
              src="./herocircle.png"
              alt=""
              style={{
                height: "80%",
                width: "80%",
                marginLeft: "4rem",
                marginTop: "7rem",
              }}
            />
            <img
              src="./herogirl.png"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                marginTop: "-31.7rem",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
