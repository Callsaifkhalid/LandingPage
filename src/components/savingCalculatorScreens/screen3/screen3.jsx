import React from "react";
import styles from "./screen3.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
const Screen3 = ({onContinue, onBack,progress}) => {
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
          <button className={styles.button}>
            Full- time empolyed <IoIosArrowForward />
          </button>
          <button className={styles.button}>
            Part-time employed <IoIosArrowForward />
          </button>
          <button className={styles.button}>
            Self-employed <IoIosArrowForward />
          </button>
          <button className={styles.button}>
            Retired <IoIosArrowForward />
          </button>
        </div>
        <button className={styles.continuebutton} onClick={onContinue}>Continue</button>
        <span style={{ color: "#8B8B8B", fontSize: "14px", textAlign:'center'}}>
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

export default Screen3;
