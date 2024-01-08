"use client";
import React, { useState } from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { IoCheckmark } from "react-icons/io5";
import CurrencyInput from "react-currency-input-field";
import { IoMdThumbsUp } from "react-icons/io";
import { useContext } from "react";
import { InputContext } from "@/app/context/inputContext";
import { useRouter } from "next/navigation";
import { MdMailOutline } from "react-icons/md";
const Hero = () => {
  const { heroSectionInput } = useContext(InputContext);
  const [inputvalue, setinputvalue] = useState(600);
  const router = useRouter();
  const handlechange = (value) => {
    heroSectionInput(value);
    setinputvalue(value);
  };
  const handleclick = () => {
    if (inputvalue < 600) {
      return;
    } else if (inputvalue > 200000) {
    } else {
      router.push("/checkrates");
    }
  };
  const handleRespondtoMail = () => {
    router.push("/respond-to-mail-offer");
  };
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
          <div
            className={
              inputvalue < 600 || inputvalue > 200000
                ? styles.findmyrateerror
                : styles.findmyrate
            }
          >
            <CurrencyInput
              placeholder="Enter amount ($600 to $200,000)"
              prefix="$"
              maxLength={6}
              onValueChange={(value) => handlechange(value)}
            />
            <button className={styles.Link} onClick={handleclick}>
              Find My Rate{" "}
            </button>
          </div>
          <div className={styles.respondtomail}>
            <MdMailOutline style={{ color: "#05c8e8", fontSize: "20px" }} />
            <button onClick={handleRespondtoMail}>
              Respond to Mail Offer
            </button>
          </div>
          {inputvalue < 600 && (
            <div className={styles.errormsg}>
              <span>Enter amount ($600 to $200,000)</span>
            </div>
          )}
          {inputvalue > 200000 && (
            <div className={styles.errormsg}>
              <span>Enter amount ($600 to $200,000)</span>
            </div>
          )}
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
