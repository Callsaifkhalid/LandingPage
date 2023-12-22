import React, { useState } from "react";
import styles from "./screen7.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
const Screen7 = ({ onContinue, onBack, progress }) => {
  const [value, setvalue] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const handleClick = (key) => {
    // e.preventDefault();
    // setvalue(e.target.value);
    setSelectedButton(key);
  };
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../keyicon.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>Do you rent or own your home?</h1>
        </div>
        <div className={styles.optionbuttons}>
          <button
            className={styles.button}
            value={"Rent"}
            onClick={() => handleClick(1)}
            style={{ border: selectedButton === 1 ? "1px solid #05c8e8" : "" }}
          >
            Rent{" "}
            {selectedButton === 1 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick(2)}
            style={{ border: selectedButton === 2 ? "1px solid #05c8e8" : "" }}
          >
            Own - with mortgage{" "}
            {selectedButton === 2 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick(3)}
            style={{ border: selectedButton === 3 ? "1px solid #05c8e8" : "" }}
          >
            Own- without mortage{" "}
            {selectedButton === 3 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick(4)}
            style={{ border: selectedButton === 4 ? "1px solid #05c8e8" : "" }}
          >
            Other{" "}
            {selectedButton === 4 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
        </div>
        <button className={styles.continuebutton} onClick={onContinue}>
          Continue
        </button>
        <span
          style={{ color: "#8B8B8B", fontSize: "14px", textAlign: "center" }}
        >
          Check rates won’t affect your credit score
        </span>
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

export default Screen7;
