"use client";
import React, { useState } from "react";
import styles from "./saving.module.css";
import Select from "react-select";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const SavingsCalculator = () => {
  const [inputValueLoan, setInputValueLoan] = useState("");
  const [inputValueLoanCompare, setInputValueLoanCompare] = useState("");
  const [inputValueInterest, setInputValueInterest] = useState("");

  const options = [
    { value: "", label: "Loan Term", isDisabled: true },
    { value: "1 Year", label: "1 Year" },
    { value: "2 Years", label: "2 Years" },
    { value: "3 Years", label: "3 Years" },
    { value: "4 Years", label: "4 Years" },
    { value: "5 Years", label: "5 Years" },
    { value: "6 Years", label: "6 Years" },
  ];

  const Styles = {
    control: (style) => ({
      
      backgroundColor: "white",
      width: "120px",
      height: "40px",
      borderRadius: "5px",
      display: "flex",
      marginTop: "3px",
      position: 'relative',
    }),
    dropdownIndicator: base => ({
      ...base,
      color: "#05c8e8",
      ':hover':{
        color:"#05c8e8"
      } 
    }),
  };

  const handleInputChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
    const formattedValue = Number(sanitizedValue).toLocaleString();
    const finalvalue = `$${formattedValue}`;
    setInputValueLoan(finalvalue);
  };
  const handleInputChangeCompare = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
    const formattedValue = Number(sanitizedValue).toLocaleString();
    const finalvalue = `$${formattedValue}`;
    setInputValueLoanCompare(finalvalue);
  };
  const handleInputChangeInterest = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9.]/g, "");
    const formattedValue = Number(sanitizedValue).toLocaleString();
    const finalvalue = `%${formattedValue}`;
    setInputValueInterest(finalvalue);
  };

  return (
    <div className={styles.wrapper} id="savings">
      <div className={styles.headings}>
        <h3>Savings Calculator</h3>
        <h1>
          Calculate Your Savings
          <br /> with Clear Credit AI
        </h1>
      </div>
      <div className={styles.calculator}>
        <div className={styles.calculatorstuff}>
          <div className={styles.calculatorheading}>
            <h4>Enter your loan details</h4>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h5>Loan Amount</h5>
              <input
                type="text"
                maxLength="7"
                value={inputValueLoan}
                onChange={handleInputChange}
                placeholder="$0"
              />
              <span>$</span>
            </div>
            <div className={styles.box}>
              <h5>Interest Rate</h5>
              <input
                type="text"
                maxLength="3"
                value={inputValueInterest}
                onChange={handleInputChangeInterest}
                placeholder="0%"
              />
              <span>%</span>
            </div>
            <div className={styles.boxx}>
              <h5
                style={{
                  color: "#05c8e8",
                }}
              >
                Loan Term
              </h5>
              <Select options={options} styles={Styles} menuPosition="absolute"/>
            </div>
          </div>
          <div className={styles.calculatorheading}>
            <h4 style={{marginTop:'3rem'}}>Choose a rate to compare</h4>
            <span>
              Our lender rates vary from{" "}
              <span style={{ color: "#1A4048" }}>5.20%</span> to{" "}
              <span style={{ color: "#1A4048" }}>35.99%</span> APR
            </span>
          </div>
          <div className={styles.boxes2}>
            <div className={styles.box}>
              <h5>Loan Amount</h5>
              <input
                type="text"
                maxLength="7"
                value={inputValueLoanCompare}
                onChange={handleInputChangeCompare}
                placeholder="$0"
              />
              <span>$</span>
            </div>
            <div className={styles.boxx}>
              <h5
                style={{
                  color: "#05c8e8",
                }}
              >
                Loan Term
              </h5>
              <Select options={options} styles={Styles} />
            </div>
          </div>
          <div className={styles.calculatorheading}>
            <h4 style={{marginTop:'4rem'}}>Check the results</h4>
            <span>
              With an interest rate o{" "}
              <span style={{ color: "#1A4048" }}>12.00%</span> over 5 Year, you
              will pay <span style={{ color: "#1A4048" }}>$270</span> per month
              and <span style={{ color: "#1A4048" }}>$4,056</span> in interest
              over the lifetime o your loan.
            </span>
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
                <span>
                  $9,170
                  <FaArrowDown
                    style={{
                      color: "#1a4048",
                      marginLeft: "0.5rem",
                      marginBottom:'-0.4rem',
                      color: "green",
                    }}
                  />
                </span>
                <p>Less in interest</p>
              </div>
              <div className={styles.interestbox}>
                <span>
                  Total interest savings:{" "}
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    $9,170
                  </span>
                </span>
                <div className={styles.colorboxes}>
                  <img src="./bluebox.png" alt="" width={20} />
                  <span>New Loan</span>
                  <img src="./blackbox.png" alt="" width={20} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    $4,056
                  </span>
                  <div className={styles.colorbar}>
                    <div
                      className={
                        styles.currentloan + " " + styles.currentcolorfill
                      }
                    ></div>
                  </div>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    $4,056
                  </span>
                  <div className={styles.colorbar}>
                    <div
                      className={styles.newloan + " " + styles.newcolorfill}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
                <span>
                  $9,170
                  <FaArrowUp
                    style={{
                      color: "#1a4048",
                      marginLeft: "0.5rem",
                      marginBottom:'-0.2rem',
                      color: "crimson",
                    }}
                  />
                </span>
                <p>Less in interest</p>
              </div>
              <div className={styles.interestbox}>
                <span>
                  Total interest savings:{" "}
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    $9,170
                  </span>
                </span>
                <div className={styles.colorboxes}>
                  <img src="./bluebox.png" alt="" width={20} />
                  <span>New Loan</span>
                  <img src="./blackbox.png" alt="" width={20} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    $4,056
                  </span>
                  <div className={styles.colorbar}>
                    <div
                      className={
                        styles.currentloan + " " + styles.currentcolorfill
                      }
                    ></div>
                  </div>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    $4,056
                  </span>
                  <div className={styles.colorbar}>
                    <div
                      className={styles.newloan + " " + styles.newcolorfill}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <span>
              Checking rates won’t affect your credit score. Calculator results
              are for illustrative purposes only.
            </span>
            <button>
              <Link
                href={"./screens/checkrates"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Check Rates
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
