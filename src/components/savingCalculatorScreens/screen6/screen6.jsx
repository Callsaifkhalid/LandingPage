import React, { useState } from "react";
import styles from "./screen6.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
const Screen6 = ({ onContinue,onBack, progress }) => {
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
      <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton}/>
        <div className={styles.calculatorScreensImg}>
          <img src="../houseicon.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>What’s your home address?</h1>
          <span>
            Our lending partners need this to verify your credit profile
          </span>
        </div>
        <div className={styles.inputfields}>
          <div className={styles.inputs}>
            {address != "" && <span>Address</span>}
            <input
              type="text"
              placeholder="Address"
              className={styles.nameinput}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />{" "}
            {address != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          <div className={styles.inputs}>
            {unit != "" && <span>Unit (Optional)</span>}
            <input
              type="text"
              placeholder="Unit (Optional)"
              className={styles.nameinput}
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            {unit != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
        </div>
        <button className={styles.continuebutton} onClick={onContinue}>
          Continue
        </button>
        <span style={{ color: "#8B8B8B", fontSize: "14px" }}>
          Check rates won’t affect your credit score
        </span>
        <div className={styles.securityheading}>
          <FaLock style={{ marginRight: "10px" }} />
          <h4>Your security is our top priority</h4>
        </div>
        <div className={styles.footer}>
          <div className={styles.learnmore}>
            <IoMdCheckmark />
            <span>
              We use TLS encryption, the same security protocols used by top
              banks
              <br /> and lenders. <Link href={""}>Learn More</Link>
            </span>
          </div>
          <div className={styles.privacypolicy}>
            <IoMdCheckmark />
            <span>
              We don’t sell your information to third parties. Read our{" "}
              <Link href={""}>Privacy Policy</Link>
            </span>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: "#b0b0b0",
            marginBottom: "-3rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "#05c8e8",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen6;
