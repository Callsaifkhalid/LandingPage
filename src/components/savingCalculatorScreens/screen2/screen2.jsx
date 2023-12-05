import React, { useState } from "react";
import styles from "./screen2.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
const Screen2 = ({ onContinue, onBack, progress }) => {
  const [value, setvalue] = useState("");
  const [toggle, settoggle] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setvalue(e.target.value);
    settoggle(!toggle);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton}/>
        <div className={styles.calculatorScreensImg}>
          <img src="../dollarphoto.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>Tell us why you’re looking for a loan</h1>
          <span>It’s okay to estimate how much you need</span>
        </div>
        <div className={styles.optionbuttons}>
          <button
            className={styles.button}
            value={"Debt Consolidation"}
            onClick={handleClick}
          >
            Debt Consolidation{" "}
            {toggle ? (
              <FaCheckCircle style={{ color: "green" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button className={styles.button}>
            Pay off credit cards <IoIosArrowForward />
          </button>
          <button className={styles.button}>
            Home improvement <IoIosArrowForward />
          </button>
          <button className={styles.button}>
            Major purchase <IoIosArrowForward />
          </button>
        </div>
        <button className={styles.continuebutton} onClick={onContinue}>
          Continue
        </button>
        <span style={{ color: "#8B8B8B", fontSize: "14px" }}>
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

export default Screen2;
