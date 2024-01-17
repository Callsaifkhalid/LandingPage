import React, { useContext, useState } from "react";
import styles from "./screen5.module.css";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { InputContext } from "@/app/context/inputContext";
const Screen5 = ({ onContinue, onBack, progress }) => {
  const { dob, setDOB } = useContext(InputContext);
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 18);
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
    .toISOString()
    .split("T")[0];
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../dob.svg" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>What’s your date of birth ?</h1>
        </div>
        <div>
          {/* <DatePicker
            onChange={(date) => setDOB(date)}
            value={dob || defaultDate}
            className={styles.calenderr}
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
            maxDate={minDate}
            
          /> */}
          <input
            type="date"
            onChange={(e) => setDOB(e.target.value)}
            value={dob}
            className={styles.calenderr}
            max={maxDate}
          />
        </div>
        <button
          className={!dob ? styles.disabledbutton : styles.continuebutton}
          onClick={onContinue}
          disabled={!dob ? true : false}
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
              <br /> and lenders.
            </span>
          </div>
          <div className={styles.privacypolicy}>
            <IoMdCheckmark />
            <span>
              We don’t sell your information to third parties. Read our{" "}
              <Link href={"/privacyPolicy"}>Privacy Policy</Link>
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

export default Screen5;
