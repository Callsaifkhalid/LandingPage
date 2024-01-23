import React, { useContext, useState } from "react";
import styles from "./screen6.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import Select from "react-select";
import options from "@/utils/stateOptions";
import { InputContext } from "@/app/context/inputContext";
const Screen6 = ({ onContinue, onBack, progress }) => {
  const {
    address,
    setAddress,
    suite,
    setSuite,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
  } = useContext(InputContext);

  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "60px",
      border: "none",
      marginLeft: "2%",
      placeholder: "State",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
  };
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../houseicon.svg" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>What’s your home address?</h1>
          <span>
            Our lending partners need this to verify your credit profile
          </span>
        </div>
        <div className={styles.inputfields}>
          <div className={styles.inputs}>
            {address != "" && <span>Address (street)</span>}
            <input
              type="text"
              placeholder="Address (street)"
              className={styles.nameinput}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />{" "}
            {address != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          <div className={styles.inputs}>
            {suite != "" && <span>Suite / Apartment</span>}
            <input
              type="text"
              placeholder="Suite / Apartment"
              className={styles.nameinput}
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
            {suite != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          <div className={styles.inputs}>
            {city != "" && <span>City</span>}
            <input
              type="text"
              placeholder="City"
              className={styles.nameinput}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {city != "" && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
          <div className={styles.inputs}>
            <Select
              options={options}
              styles={Styles}
              placeholder="State"
              onChange={setState}
            />
          </div>
          <div className={styles.inputs}>
            {zipCode && <span>Zipcode</span>}
            <input
              type="number"
              placeholder="Zipcode"
              className={styles.nameinput}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            {zipCode && <IoMdCheckmark style={{ color: "#05c8e8" }} />}
          </div>
        </div>
        <button
          className={
            !zipCode
              ? styles.disabledbutton
              : state === ""
              ? styles.disabledbutton
              : city === ""
              ? styles.disabledbutton
              : address === ""
              ? styles.disabledbutton
              : styles.continuebutton
          }
          onClick={onContinue}
          disabled={
            zipCode === null
              ? true
              : state === ""
              ? true
              : city === ""
              ? true
              : address === ""
              ? true
              : false
          }
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

export default Screen6;
