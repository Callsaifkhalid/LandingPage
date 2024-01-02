import React, { useContext, useState } from "react";
import styles from "./screen4.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { InputContext } from "@/app/context/inputContext";
const Screen4 = ({ onContinue, onBack, progress }) => {
  const { first_name, setFirstName, last_name, setlastName } =
    useContext(InputContext);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../infophoto.svg" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>Let’s us know a little more about you</h1>
          <span>It’s okay to estimate how much you need</span>
        </div>
        <div className={styles.inputfields}>
          <div className={styles.inputs}>
            {first_name != "" && <span>First Name</span>}
            <input
              type="text"
              placeholder="First Name"
              className={styles.nameinput}
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />{" "}
            {first_name != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          <div className={styles.inputs}>
            {last_name != "" && <span>Last Name</span>}
            <input
              type="text"
              placeholder="Last Name"
              className={styles.nameinput}
              value={last_name}
              onChange={(e) => setlastName(e.target.value)}
            />
            {last_name != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
        </div>
        <button
          className={styles.continuebutton}
          onClick={onContinue}
          disabled={first_name === "" ? true : last_name === "" ? true : false}
        >
          Continue
        </button>
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

export default Screen4;
