"use client";
import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import CurrencyInput from "react-currency-input-field";
import { IoMdThumbsUp } from "react-icons/io";
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
            <div className={styles.herodes}>
              <IoCheckmark />
              <span>
                Rates from 5.20% - 35.99% APR<sup>1</sup>
              </span>
            </div>
            <div className={styles.herodes2}>
              <IoCheckmark />
              <span>Loan amounts from $600 to $200,000</span>
            </div>
          </div>
          <div className={styles.findmyrate}>
            <CurrencyInput
              id="input-example"
              name="input-name"
              placeholder="Enter amount ($600 to $200,000)"
              prefix="$"
              decimalsLimit={2}
              maxLength={5}
            />
            <button>Find My Rate</button>
          </div>
          <div className={styles.thumbsup}>
            <IoMdThumbsUp />
            <span>Checking rates won’t affect your credit score</span>
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
            <img src="./herocircle.png" alt="" className={styles.herocircle} />
            <img src="./herogirl.png" alt="" className={styles.herogirl} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
