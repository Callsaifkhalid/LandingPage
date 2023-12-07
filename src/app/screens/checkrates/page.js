"use client";
import React, { useState } from "react";
import styles from "./checkrates.module.css";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Screen2 from "@/components/savingCalculatorScreens/screen2/screen2";
import Screen3 from "@/components/savingCalculatorScreens/screen3/screen3";
import Screen4 from "@/components/savingCalculatorScreens/screen4/screen4";
import Screen5 from "@/components/savingCalculatorScreens/screen5/screen5";
import Screen6 from "@/components/savingCalculatorScreens/screen6/screen6";
import Screen7 from "@/components/savingCalculatorScreens/screen7/screen7";
import Screen8 from "@/components/savingCalculatorScreens/screen8/screen8";
import Screen9 from "@/components/savingCalculatorScreens/screen9/screen9";
import Screen10 from "@/components/savingCalculatorScreens/screen10/screen10";
import Navbar from "../navbar/page";

const Screen1 = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [currentView, setCurrentView] = useState(1);
  const totalScreens = 10;
  const progress = (currentView / totalScreens) * 100;
  const handleClick = (e) => {
    e.preventDefault();
    setinputvalue(e.target.value);
  };
  const handleContinueClick = () => {
    setCurrentView(currentView + 1);
  };
  const handleback = () => {
    setCurrentView(currentView - 1);
  };
  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <FaRegArrowAltCircleLeft
          style={{ fontSize: "2rem", color: "#1a4048", padding: "2rem" }}
        />
      </Link>
      {currentView === 1 && (
        <div className={styles.calculator}>
          <div className={styles.calculatorScreens} >
            <div className={styles.calculatorScreensImg}>
              <img src="../dollarphoto.png" alt="" width={100} />
            </div>
            <div className={styles.calculatorScreensheading}>
              <h1>How much do you want to borrow?</h1>
              <span>It’s okay to estimate how much you need</span>
            </div>
            <div className={styles.inputfield}>
              <div className={styles.dollarsignbox}>
                <span>$</span>
              </div>
              <div className={styles.inputfieldbox}>
                <span>Loan Amount</span>
                <input
                  type="text"
                  maxLength={5}
                  value={inputvalue}
                  onChange={(e) => setinputvalue(e.target.value)}
                />
              </div>
            </div>
            <span style={{ color: "black", fontSize: "14px" }}>
              Or pick a common amount
            </span>
            <div className={styles.pricebuttons}>
              <button onClick={handleClick} value={5000}>
                $5000
              </button>
              <button onClick={handleClick} value={10000}>
                $10,000
              </button>
              <button onClick={handleClick} value={15000}>
                $15,0000
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
                $50,0000
              </button>
            </div>
            <button
              className={styles.continuebutton}
              onClick={handleContinueClick}
            >
              Continue
            </button>
            <span style={{ color: "#8B8B8B", fontSize: "14px" ,textAlign:'center' }}>
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
        <Screen7
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 8 && (
        <Screen8
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 9 && (
        <Screen9
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
      {currentView === 10 && (
        <Screen10
          onContinue={handleContinueClick}
          onBack={handleback}
          progress={progress}
        />
      )}
    </div>
  );
};

export default Screen1;
