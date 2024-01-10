"use client";
import React, { useState } from "react";
import styles from "./checkrates.module.css";
import Screen2 from "@/components/savingCalculatorScreens/screen2/screen2";
import Screen3 from "@/components/savingCalculatorScreens/screen3/screen3";
import Screen4 from "@/components/savingCalculatorScreens/screen4/screen4";
import Screen5 from "@/components/savingCalculatorScreens/screen5/screen5";
import Screen6 from "@/components/savingCalculatorScreens/screen6/screen6";
import Screen8 from "@/components/savingCalculatorScreens/screen8/screen8";
import Screen10 from "@/components/savingCalculatorScreens/screen10/screen10";
import CalculatorNavbar from "@/components/calculatorNavbar/calulatorNavbar";
import { useContext } from "react";
import { InputContext } from "@/app/context/inputContext";
import CurrencyInput from "react-currency-input-field";
import AlmostThere from "@/components/savingCalculatorScreens/almostThereScreen/almostThere";
import Dilaerpage from "@/components/savingCalculatorScreens/dialerpage/dilaerpage";
import MissedcallPage from "@/components/savingCalculatorScreens/missedCallPage/missedcallPage";
import Modal from "@/components/Modal/Modal";

const Screen1 = () => {
  const { heroInput, heroSectionInput } = useContext(InputContext);
  const [currentView, setCurrentView] = useState(1);
  const totalScreens = 8;
  const progress = (currentView / totalScreens) * 100;
  const handleClick = (e) => {
    e.preventDefault();
    heroSectionInput(e.target.value);
  };
  const handleContinueClick = () => {
    if (heroInput < 600) {
      return;
    } else if (heroInput > 200000) {
    } else if (!heroInput) {
    } else {
      setCurrentView(currentView + 1);
    }
  };
  const handleback = () => {
    setCurrentView(currentView - 1);
  };
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className={styles.wrapper}>
      <CalculatorNavbar />
      {currentView === 1 && (
        
        <div className={styles.calculator}>
           
          <div className={styles.calculatorScreens}>
            <div className={styles.calculatorScreensImg}>
              <img src="../dollarphoto.svg" alt="" width={100} />
            </div>
            <div className={styles.calculatorScreensheading}>
              <h1>How much do you want to borrow?</h1>
              <span>It’s okay to estimate how much you need</span>
            </div>
            <div
              className={
                isInputFocused ? styles.inputfieldfocused : styles.inputfield
              }
              style={{ border: heroInput === undefined ? "1px solid red" : "" }}
            >
              <div className={styles.dollarsignbox}>
                <span>$</span>
              </div>
              <div className={styles.inputfieldbox}>
                <span>Loan Amount</span>
                <CurrencyInput
                  value={heroInput}
                  prefix="$"
                  maxLength={6}
                  onValueChange={(value) => heroSectionInput(value)}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
            </div>
            {heroInput === undefined && (
              <div className={styles.errormsg}>
                <span>Please fill this field</span>
              </div>
            )}
            {heroInput < 600 && (
              <div className={styles.errormsg2}>
                <span>Enter amount ($600 to $200,000)</span>
              </div>
            )}
            {heroInput > 200000 && (
              <div className={styles.errormsg2}>
                <span>Enter amount ($600 to $200,000)</span>
              </div>
            )}
            <span style={{ color: "black", fontSize: "14px" }}>
              Or pick a common amount:
            </span>
            <div className={styles.pricebuttons}>
              <button onClick={handleClick} value={5000}>
                $5000
              </button>
              <button onClick={handleClick} value={10000}>
                $10,000
              </button>
              <button onClick={handleClick} value={15000}>
                $15,000
              </button>
              <button onClick={handleClick} value={20000}>
                $20,000
              </button>
            </div>
            <div className={styles.pricebuttons2}>
              <button onClick={handleClick} value={25000}>
                $25,000
              </button>
              <button onClick={handleClick} value={30000}>
                $30,000
              </button>
              <button onClick={handleClick} value={50000}>
                $50,000
              </button>
            </div>
            <button
              className={
                heroInput < 600
                  ? styles.disabledbutton
                  : heroInput > 200000
                  ? styles.disabledbutton
                  : !heroInput
                  ? styles.disabledbutton
                  : styles.continuebutton
              }
              onClick={handleContinueClick}
            >
              Continue
            </button>
            <span
              style={{
                color: "#8B8B8B",
                fontSize: "14px",
                textAlign: "center",
              }}
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
      )}
      {currentView === 2 && (
        <Screen2
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 3 && (
        <Screen3
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 4 && (
        <Screen4
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 5 && (
        <Screen5
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 6 && (
        <Screen6
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}

      {currentView === 7 && (
        <Screen8
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}

      {currentView === 8 && (
        <Screen10
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}

      {currentView === 9 && <AlmostThere onContinue={handleContinueClick} />}
      {currentView === 10 && <Dilaerpage onContinue={handleContinueClick} />}
      {currentView === 11 && (
        <MissedcallPage onContinue={handleContinueClick} />
      )}
    </div>
  );
};

export default Screen1;
