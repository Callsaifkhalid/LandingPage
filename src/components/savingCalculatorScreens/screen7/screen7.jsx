import React, { useState } from "react";
import styles from "./screen7.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";
const Screen7 = ({onContinue,progress}) => {
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
        <div className={styles.calculatorScreensImg}>
          <img src="../keyicon.png" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>Do you rent or own your home?</h1>
        </div>
        <div className={styles.optionbuttons}>
          <button className="button" value={"Rent"} onClick={handleClick}>
            Rent{" "}
            {toggle ? (
              <FaCheckCircle style={{ color: "green" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button className="button">
            Own - with mortgage <IoIosArrowForward />
          </button>
          <button className="button">
            Own- without mortage <IoIosArrowForward />
          </button>
          <button className="button">
            Other <IoIosArrowForward />
          </button>
        </div>
        <button className={styles.continuebutton} onClick={onContinue}>Continue</button>
        <span style={{ color: "#8B8B8B", fontSize: "14px" }}>
          Check rates won’t affect your credit score
        </span>
        <div
              style={{
                width: "100%",
                height: "5px",
                backgroundColor: "#b0b0b0",
                marginBottom:'-3rem',
                marginTop:'1rem'
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
