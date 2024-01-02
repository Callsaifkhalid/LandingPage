import React, { useContext, useState } from "react";
import styles from "./screen2.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { InputContext } from "@/app/context/inputContext";
const Screen2 = ({ onContinue, onBack, progress }) => {
  const { setloanreasonvalue } = useContext(InputContext);
  const [loanReason, setLoanReason] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const handleClick = (loanreason, buttonId) => {
    setLoanReason(loanreason);
    setSelectedButton(buttonId);
    setloanreasonvalue(loanreason);
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
          <span>
            Our lending partners offer loans for all your financial goals
          </span>
        </div>
        <div className={styles.optionbuttons}>
          <button
            className={styles.button}
            onClick={() => handleClick("Debt Consolidation", 1)}
            style={{ border: selectedButton === 1 ? "1px solid #05c8e8" : "" }}
          >
            Debt Consolidation{" "}
            {selectedButton === 1 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Pay off credit cards", 2)}
            style={{ border: selectedButton === 2 ? "1px solid #05c8e8" : "" }}
          >
            Pay off credit cards{" "}
            {selectedButton === 2 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Home improvement", 3)}
            style={{ border: selectedButton === 3 ? "1px solid #05c8e8" : "" }}
          >
            Home improvement{" "}
            {selectedButton === 3 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
          <button
            className={styles.button}
            onClick={() => handleClick("Major purchase", 4)}
            style={{ border: selectedButton === 4 ? "1px solid #05c8e8" : "" }}
          >
            Major purchase{" "}
            {selectedButton === 4 ? (
              <FaCheckCircle style={{ color: "green", fontSize: "15px" }} />
            ) : (
              <IoIosArrowForward />
            )}
          </button>
        </div>
        <button
          className={loanReason===""?styles.disabledbutton:styles.continuebutton}
          onClick={onContinue}
          disabled={loanReason === "" ? true : false}
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

export default Screen2;
