import React from "react";
import "./screen3.css";
import { IoIosArrowForward } from "react-icons/io";
const Screen3 = ({onContinue,progress}) => {
  return (
    <div className="calculator">
      <div className="calculatorScreens">
        <div className="calculatorScreensImg">
          <img src="../dollarphoto.png" alt="" width={100} />
        </div>
        <div className="calculatorScreensheading">
          <h1>Tell us why you’re looking for a loan</h1>
          <span>It’s okay to estimate how much you need</span>
        </div>
        <div className="optionbuttons">
          <button className="button">
            Full- time empolyed <IoIosArrowForward />
          </button>
          <button className="button">
            Part-time employed <IoIosArrowForward />
          </button>
          <button className="button">
            Self-employed <IoIosArrowForward />
          </button>
          <button className="button">
            Retired <IoIosArrowForward />
          </button>
        </div>
        <button className="continuebutton" onClick={onContinue}>Continue</button>
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

export default Screen3;
