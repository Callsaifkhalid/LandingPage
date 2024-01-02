import React, { useContext, useState } from "react";
import styles from "./screen3.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { InputContext } from "@/app/context/inputContext";
const Screen3 = ({ onContinue, onBack, progress }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const { setemploymentvalue, employmentvalue } = useContext(InputContext);
  const handleClick = (employment, buttonId) => {
    setSelectedButton(buttonId);
    setemploymentvalue(employment);
  };
  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorScreens}>
        <IoMdArrowRoundBack onClick={onBack} className={styles.backbutton} />
        <div className={styles.calculatorScreensImg}>
          <img src="../dollarphoto.svg" alt="" width={100} />
        </div>
        <div className={styles.calculatorScreensheading}>
          <h1>Tell us why you’re looking for a loan</h1>
          <span>It’s okay to estimate how much you need</span>
        </div>
        <div className={styles.optionbuttons}>
          <button
            className={styles.button}
            onClick={() => handleClick("Full- time empolyed", 1)}
            style={{ border: selectedButton === 1 ? "1px solid #05c8e8" : "" }}
          >
            Full- time empolyed{" "}
            {selectedButton === 1 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Part-time employed", 2)}
            style={{ border: selectedButton === 2 ? "1px solid #05c8e8" : "" }}
          >
            Part-time employed{" "}
            {selectedButton === 2 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Self-employed", 3)}
            style={{ border: selectedButton === 3 ? "1px solid #05c8e8" : "" }}
          >
            Self-employed{" "}
            {selectedButton === 3 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Retired", 4)}
            style={{ border: selectedButton === 4 ? "1px solid #05c8e8" : "" }}
          >
            Retired{" "}
            {selectedButton === 4 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
        </div>
        <button
          className={employmentvalue === "" ?styles.disabledbutton:styles.continuebutton}
          onClick={onContinue}
          disabled={employmentvalue === "" ? true : false}
        >
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

export default Screen3;
