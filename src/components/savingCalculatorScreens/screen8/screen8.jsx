import React, { useContext, useState } from "react";
import styles from "./screen8.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import CurrencyInput from "react-currency-input-field";
import { InputContext } from "@/app/context/inputContext";
const Screen8 = ({ onContinue, onBack, progress }) => {
  const { housing_cost, setHousingCost } = useContext(InputContext);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../dollarphoto.svg" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>
            How much do you pay each
            <br />
            <span style={{ display: "flex", justifyContent: "center" }}>
              month for housing?
            </span>
          </h1>
        </div>
        <div className={styles.inputfield}>
          <div className={styles.dollarsignbox}>
            <span>$</span>
          </div>
          <div className={styles.inputfieldbox}>
            <span>Housing Costs</span>
            <CurrencyInput
              value={housing_cost}
              prefix="$"
              maxLength={5}
              onValueChange={(value) => setHousingCost(value)}
            />
          </div>
        </div>
        <button
          className={
            housing_cost === "" ? styles.disabledbutton : styles.continuebutton
          }
          onClick={onContinue}
          disabled={housing_cost === "" ? true : false}
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

export default Screen8;
