import React, { useState } from "react";
import styles from "./screen10.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
const Screen10 = ({ onBack, progress }) => {
  const [phonenumber, setphonenumber] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../telephone.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>What is your contact detail?</h1>
        </div>
        <div className={styles.inputfields}>
          <div className={styles.inputs}>
            {email != "" && <span>Email</span>}
            <input
              type="text"
              placeholder="Email"
              className={styles.nameinput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            {email != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
        
          <div className={styles.inputs}>
            {phonenumber != "" && <span>Phone Number</span>}
            <input
              type="number"
              placeholder="Phone Number"
              className={styles.nameinput}
              value={phonenumber}
              onChange={(e) => setphonenumber(e.target.value)}
            />{" "}
            {phonenumber != "" && (
              <IoMdCheckmark style={{ color: "#05c8e8" }} />
            )}
          </div>
        </div>
        <button className={styles.continuebutton}>Continue</button>
        <span
          style={{ color: "#8B8B8B", fontSize: "14px", textAlign: "center" }}
        >
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

export default Screen10;
