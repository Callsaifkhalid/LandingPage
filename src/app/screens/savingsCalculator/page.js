"use client";
import React, { useState } from "react";
import styles from "./saving.module.css";
import Select from "react-select";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import ColorBars from "@/components/colorbars/colorbars";
import ColorBars2 from "@/components/colobars2/colorbars2";

const SavingsCalculator = () => {
  const [inputValueLoan, setInputValueLoan] = useState("");
  const [currentInterest, setCurrentInterest] = useState("");
  const [currentloanPeriod, setCurrentLoanPeriod] = useState(null);
  const [compareInterest, setCompareInterest] = useState("");
  const [compareloanPeriod, setLoanPeriod] = useState(null);

  const options = [
    { value: "", label: "Loan Term", isDisabled: true },
    { value: "1", label: "1 Year" },
    { value: "2 ", label: "2 Years" },
    { value: "3", label: "3 Years" },
    { value: "4", label: "4 Years" },
    { value: "5", label: "5 Years" },
    { value: "6", label: "6 Years" },
  ];

  const Styles = {
    control: (provided, state) => ({}),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
  };
  const loanAmount = parseInt(inputValueLoan);
  const compareannualInterestRate = parseFloat(compareInterest);
  const compareloanDurationYears = parseInt(compareloanPeriod);
  const currentannualInterestRate = parseFloat(currentInterest);
  const currentloanDurationYears = parseInt(currentloanPeriod);
  //Compare inputs NAN validation
  const isValidInput =
    !isNaN(loanAmount) &&
    !isNaN(compareannualInterestRate) &&
    !isNaN(compareloanDurationYears);
  //Current inputs NAN validation
  const isValidInput1 =
    !isNaN(loanAmount) &&
    !isNaN(currentannualInterestRate) &&
    !isNaN(currentloanDurationYears);
  //Compare monthly payment validation
  const comparemonthlyPayment = isValidInput
    ? calculateMonthlyPayment(
        loanAmount,
        compareannualInterestRate,
        compareloanDurationYears
      )
    : null;
  //Current monthly payment validation
  const currentmonthlyPayment = isValidInput1
    ? calculateCurrentMonthlyPayment(
        loanAmount,
        currentannualInterestRate,
        currentloanDurationYears
      )
    : null;
  //Current monthly payment calculation function
  function calculateCurrentMonthlyPayment(
    loanAmount,
    currentannualInterestRate,
    currentloanDurationYears
  ) {
    const monthlyInterestRate = currentannualInterestRate / 12 / 100;

    const numberOfPayments = currentloanDurationYears * 12;

    const currentmonthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return parseFloat(currentmonthlyPayment).toFixed(1);
  }
  //Compare monthly payment calculation function
  function calculateMonthlyPayment(
    loanAmount,
    compareannualInterestRate,
    compareloanDurationYears
  ) {
    const monthlyInterestRate = compareannualInterestRate / 12 / 100;

    const numberOfPayments = compareloanDurationYears * 12;

    const comparemonthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return parseFloat(comparemonthlyPayment).toFixed(1);
  }
  /////////////////////////////
  function calculateCurrentRemainingLoan(
    currentmonthlyPayment,
    currentloanDurationYears,
    inputValueLoan
  ) {
    const totalPayments = currentmonthlyPayment * currentloanDurationYears * 12;
    const currentremainingLoan = totalPayments - inputValueLoan;
    return parseFloat(currentremainingLoan).toFixed(1);
  }
  const currentremainingLoan = isValidInput1
    ? calculateCurrentRemainingLoan(
        currentmonthlyPayment,
        currentloanDurationYears,
        inputValueLoan
      )
    : null;
  //////////////////////////
  /////////////////////////////
  function calculateCompareRemainingLoan(
    comparemonthlyPayment,
    compareloanDurationYears,
    inputValueLoan
  ) {
    const totalPayments = comparemonthlyPayment * compareloanDurationYears * 12;
    const compareremainingLoan = totalPayments - inputValueLoan;
    return parseFloat(compareremainingLoan).toFixed(1);
  }
  const compareremainingLoan = isValidInput
    ? calculateCompareRemainingLoan(
        comparemonthlyPayment,
        compareloanDurationYears,
        inputValueLoan
      )
    : null;
  //////////////////////////
  const interestboxvalue = parseFloat(
    currentremainingLoan - compareremainingLoan
  ).toFixed(1);
  const monthlyboxvalue = parseFloat(
    currentmonthlyPayment - comparemonthlyPayment
  ).toFixed(1);
  const handleInputChange = (e) => {
    setInputValueLoan(e.target.value);
  };
  //Compare Section Input state functions
  const handleCompareInterest = (e) => {
    setCompareInterest(e.target.value);
  };
  const handleLoanPeriod = (e) => {
    setLoanPeriod(e.value);
  };
  //Current Section Input state functions
  const handleCurrentInterest = (e) => {
    setCurrentInterest(e.target.value);
  };
  const handleCurrentLoanPeriod = (e) => {
    setCurrentLoanPeriod(e.value);
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
            <h3>1. Enter your loan details</h3>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h5>Loan Amount</h5>
              <input
                type="text"
                maxLength="5"
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
                maxLength="5"
                placeholder="0%"
                onChange={handleCurrentInterest}
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
              <Select
                options={options}
                className="customSelect"
                classNamePrefix="select"
                styles={Styles}
                onChange={handleCurrentLoanPeriod}
              />
            </div>
          </div>
          <div className={styles.calculatorheading}>
            <h3 style={{ marginTop: "3rem" }}>2. Choose a rate to compare</h3>
            <span>
              Our lender rates vary from{" "}
              <span style={{ color: "#1A4048" }}>5.20%</span> to{" "}
              <span style={{ color: "#1A4048" }}>35.99%</span> APR
            </span>
          </div>
          <div className={styles.boxes2}>
            <div className={styles.box}>
              <h5>Interest Rate</h5>
              <input
                type="text"
                maxLength="5"
                value={compareInterest}
                onChange={handleCompareInterest}
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
              <Select
                options={options}
                className="customSelect"
                classNamePrefix="select"
                styles={Styles}
                onChange={handleLoanPeriod}
              />
            </div>
          </div>
          <div className={styles.calculatorheading}>
            <h3 style={{ marginTop: "4rem" }}>3. Check the results</h3>
            {isValidInput && (
              <span>
                With an interest rate of{" "}
                <span style={{ color: "#1a4048", fontWeight: "600" }}>
                  {compareInterest}%
                </span>{" "}
                over{" "}
                <span style={{ color: "#1a4048", fontWeight: "600" }}>
                  {compareloanPeriod} Years
                </span>{" "}
                , you will pay{" "}
                <span style={{ color: "#1a4048", fontWeight: "600" }}>
                  ${comparemonthlyPayment}
                </span>{" "}
                per month and{" "}
                <span style={{ color: "#1a4048", fontWeight: "600" }}>
                  ${compareremainingLoan}
                </span>{" "}
                in interest over the lifetime of your loan.
              </span>
            )}
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
                {isValidInput?
                  <div>
                    <span>
                      ${Math.abs(interestboxvalue)}
                      {interestboxvalue>0 &&<FaArrowDown
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.4rem",
                          color: "green",
                        }}
                      />}
                      {interestboxvalue<0 &&<FaArrowUp
                    style={{
                      color: "#1a4048",
                      marginLeft: "0.5rem",
                      marginBottom: "-0.2rem",
                      color: "crimson",
                    }}
                  />}
                    </span>
                    {interestboxvalue>0 &&<p>Less in interest</p>}
                    {interestboxvalue<0 &&<p>More in interest</p>}
                    {interestboxvalue==0 &&<p>No change in interest</p>}
                  </div>
                :'-'}
              </div>
              <div className={styles.interestbox}>
              {interestboxvalue<=0&&<span>
                  Total interest:{" "}
                </span>}
                {interestboxvalue>0&&<span>
                  Total interest savings:{" "}
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    ${interestboxvalue}
                  </span>
                </span>}
                <div className={styles.colorboxes}>
                  <img src="./bluebox.png" alt="" width={20} />
                  <span>New Loan</span>
                  <img src="./blackbox.png" alt="" width={20} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    {isValidInput ? `$${compareremainingLoan}` : `_`}
                  </span>
                  <ColorBars value={compareremainingLoan}/>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    {isValidInput1 ? `$${currentremainingLoan}` : `_`}
                  </span>
                 <ColorBars2 value={currentremainingLoan}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.barboxes}>
            <div className={styles.barbox}>
              <div className={styles.moneysignbox}>
              {isValidInput?
                  <div>
                    <span>
                      ${Math.abs(monthlyboxvalue)}
                      {monthlyboxvalue>0 &&<FaArrowDown
                        style={{
                          color: "#1a4048",
                          marginLeft: "0.5rem",
                          marginBottom: "-0.4rem",
                          color: "green",
                        }}
                      />}
                      {monthlyboxvalue<0 &&<FaArrowUp
                    style={{
                      color: "#1a4048",
                      marginLeft: "0.5rem",
                      marginBottom: "-0.2rem",
                      color: "crimson",
                    }}
                  />}
                    </span>
                    {monthlyboxvalue>0 &&<p>Less per month</p>}
                    {monthlyboxvalue<0 &&<p>More per month</p>}
                    {monthlyboxvalue==0 &&<p>No change per month</p>}
                  </div>
                :'-'}
              </div>
              <div className={styles.interestbox}>
                {monthlyboxvalue<=0&&<span>
                  Monthly payment:{" "}
                </span>}
                {monthlyboxvalue>0&&<span>
                  Monthly payment savings:{" "}
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    ${monthlyboxvalue}
                  </span>
                </span>}
                <div className={styles.colorboxes}>
                  <img src="./bluebox.png" alt="" width={20} />
                  <span>New Loan</span>
                  <img src="./blackbox.png" alt="" width={20} />
                  <span>Current Loan</span>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#1A4048", fontWeight: "bolder" }}>
                    {isValidInput ? `$${comparemonthlyPayment}` : `_`}
                  </span>
                  <ColorBars value={comparemonthlyPayment}/>
                </div>
                <div className={styles.colorbarboxes}>
                  <span style={{ color: "#05c8e8", fontWeight: "bolder" }}>
                    {isValidInput1 ? `$${currentmonthlyPayment}` : `_`}
                  </span>
                 <ColorBars2 value={currentmonthlyPayment}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <button>
              <Link
                href={"/checkrates"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Check Rates
              </Link>
            </button>
            <span>
              Checking rates won’t affect your credit score. Calculator results
              are for illustrative purposes only.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
