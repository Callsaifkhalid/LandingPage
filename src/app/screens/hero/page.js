"use client";
import React from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import CurrencyInput from "react-currency-input-field";
import { IoMdThumbsUp } from "react-icons/io";
import Link from "next/link";
import { useContext } from "react";
import { InputContext } from "@/app/context/inputContext";
const Hero = () => {
  const { heroSectionInput } = useContext(InputContext);
  return (
    <section className={styles.herowrapper} id="hero">
      <div className={styles.flexCenter + " " + styles.herocontainer}>
        {/* left side */}
        <div className={styles.flexColStart + " " + styles.heroleft}>
          <div className={styles.herotitle}>
            <h2>
              Debt Consolidation
              <br /> Made Easy.
            </h2>
            <div className={styles.herodes}>
              <IoCheckmark style={{ fontSize: "20px" }} />
              <span>
                Rates from 5.20% - 35.99% APR<sup>1</sup>
              </span>
            </div>
            <div className={styles.herodes2}>
              <IoCheckmark style={{ fontSize: "20px" }} />
              <span>Loan amounts from $600 to $200,000</span>
            </div>
          </div>
          <div className={styles.findmyrate}>
            <CurrencyInput
              placeholder="Enter amount ($600 to $200,000)"
              prefix="$"
              decimalsLimit={2}
              maxLength={6}
              onChange={(e)=>heroSectionInput(e.target.value)}
            />
            <Link href={"./screens/checkrates"} className={styles.Link}>
              Find My Rate{" "}
            </Link>
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
